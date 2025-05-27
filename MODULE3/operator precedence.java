public class OperatorPrecedence {
    public static void main(String[] args) {
        int result1 = 10 + 5 * 2;          // Multiplication before addition
        int result2 = (10 + 5) * 2;        // Parentheses change the order
        int result3 = 20 / 5 + 2 * 3;      // Division and multiplication before addition
        int result4 = 20 / (5 + 2) * 3;    // Parentheses change grouping

        // Display the results
        System.out.println("10 + 5 * 2 = " + result1);       // 10 + (5 * 2) = 20
        System.out.println("(10 + 5) * 2 = " + result2);     // (10 + 5) * 2 = 30
        System.out.println("20 / 5 + 2 * 3 = " + result3);   // (20 / 5) + (2 * 3) = 4 + 6 = 10
        System.out.println("20 / (5 + 2) * 3 = " + result4); // 20 / 7 * 3 = 2 * 3 = 6 (integer division)

        // Explanation
        System.out.println("\nNote: Multiplication and division have higher precedence than addition and subtraction.");
        System.out.println("Parentheses can be used to change the default order of evaluation.");
    }
}
