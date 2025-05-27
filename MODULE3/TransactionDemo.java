import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class TransactionDemo {
    private static final String URL = "jdbc:sqlite:bank.db"; // or your DB url

    public static void transferMoney(int fromAccountId, int toAccountId, double amount) {
        String debitSql = "UPDATE accounts SET balance = balance - ? WHERE id = ?";
        String creditSql = "UPDATE accounts SET balance = balance + ? WHERE id = ?";

        try (Connection conn = DriverManager.getConnection(URL)) {
            conn.setAutoCommit(false); // Start transaction

            try (PreparedStatement debitStmt = conn.prepareStatement(debitSql);
                 PreparedStatement creditStmt = conn.prepareStatement(creditSql)) {

                // Debit fromAccount
                debitStmt.setDouble(1, amount);
                debitStmt.setInt(2, fromAccountId);
                int debitRows = debitStmt.executeUpdate();

                // Credit toAccount
                creditStmt.setDouble(1, amount);
                creditStmt.setInt(2, toAccountId);
                int creditRows = creditStmt.executeUpdate();

                if (debitRows == 1 && creditRows == 1) {
                    conn.commit();  // Commit transaction if both succeed
                    System.out.println("Transfer successful.");
                } else {
                    conn.rollback(); // Rollback if any failed
                    System.out.println("Transfer failed. Transaction rolled back.");
                }

            } catch (SQLException e) {
                conn.rollback();
                System.out.println("Exception occurred. Transaction rolled back.");
                e.printStackTrace();
            } finally {
                conn.setAutoCommit(true); // Reset auto-commit
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Example main method to test transfer
    public static void main(String[] args) {
        transferMoney(1, 2, 100.00);
    }
}
