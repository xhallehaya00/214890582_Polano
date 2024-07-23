import java.util.Scanner;

public class HelloWorld {
    public static void main(String[] args) {
        // Print "Hello, World!"
        System.out.println("Hello, World!");

        // Create a Scanner object to read input
        Scanner scanner = new Scanner(System.in);

        // Ask the user for their name
        System.out.print("What is your name? ");
        String name = scanner.nextLine();

        // Greet the user
        System.out.println("Hello, " + name + "!");

        // Close the scanner
        scanner.close();
    }
}
