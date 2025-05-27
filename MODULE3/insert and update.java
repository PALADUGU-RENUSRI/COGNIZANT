import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class StudentDAO {
    private static final String URL = "jdbc:sqlite:students.db"; // or your DB URL
    // For MySQL, use something like:
    // private static final String URL = "jdbc:mysql://localhost:3306/your_db";
    // private static final String USER = "yourUser";
    // private static final String PASSWORD = "yourPassword";

    // Insert a new student record
    public void insertStudent(int id, String name, int age) {
        String sql = "INSERT INTO students (id, name, age) VALUES (?, ?, ?)";

        try (Connection conn = DriverManager.getConnection(URL);
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setInt(1, id);
            pstmt.setString(2, name);
            pstmt.setInt(3, age);

            int rowsInserted = pstmt.executeUpdate();
            System.out.println("Inserted " + rowsInserted + " row(s).");

        } catch (SQLException e) {
            System.out.println("Insert error:");
            e.printStackTrace();
        }
    }

    // Update student details by ID
    public void updateStudent(int id, String newName, int newAge) {
        String sql = "UPDATE students SET name = ?, age = ? WHERE id = ?";

        try (Connection conn = DriverManager.getConnection(URL);
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setString(1, newName);
            pstmt.setInt(2, newAge);
            pstmt.setInt(3, id);

            int rowsUpdated = pstmt.executeUpdate();
            System.out.println("Updated " + rowsUpdated + " row(s).");

        } catch (SQLException e) {
            System.out.println("Update error:");
            e.printStackTrace();
        }
    }

    // Example usage
    public static void main(String[] args) {
        StudentDAO dao = new StudentDAO();

        // Insert a new student
        dao.insertStudent(1, "Alice", 22);

        // Update student info
        dao.updateStudent(1, "Alice Smith", 23);
    }
}
