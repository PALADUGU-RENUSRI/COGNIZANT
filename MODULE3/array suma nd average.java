import java.util.Scanner;

public class ArraySumAverage {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Prompt user to enter the number of elements
        System.out.print("Enter the number of elements: ");
        int n = scanner.nextInt();

        if (n <= 0) {
            System.out.println("Invalid number of elements. Please enter a positive integer.");
        } else {
            int[] numbers = new int[n];
            int sum = 0;

            // Read elements into the array
            System.out.println("Enter " + n + " elements:");
            for (int i = 0; i < n; i++) {
                numbers[i] = scanner.nextInt();
                sum += numbers[i];
            }

            // Calculate average
            double average = (double) sum / n;

            // Display sum and average
            System.out.println("Sum of elements: " + sum);
            System.out.println("Average of elements: " + average);
        }

        scanner.close();
    }
}
