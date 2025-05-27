import java.util.ArrayList;
import java.util.Scanner;

public class ArrayListDemo {
    public static void main(String[] args) {
        ArrayList<String> studentNames = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
        String input;

        System.out.println("Enter student names (type 'done' to finish):");

        // Loop to add names until user types "done"
        while (true) {
            System.out.print("Enter name: ");
            input = scanner.nextLine();

            if (input.equalsIgnoreCase("done")) {
                break;
            }

            studentNames.add(input);
        }

        // Display all student names
        System.out.println("\nStudent Names Entered:");
        for (String name : studentNames) {
            System.out.println(name);
        }

        scanner.close();
    }
}
