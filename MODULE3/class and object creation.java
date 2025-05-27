// Define the Car class
class Car {
    // Attributes
    String make;
    String model;
    int year;

    // Constructor to initialize the car object
    public Car(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Method to display car details
    public void displayDetails() {
        System.out.println("Car Make: " + make);
        System.out.println("Car Model: " + model);
        System.out.println("Car Year: " + year);
        System.out.println();
    }
}

// Main class to create and use Car objects
public class CarDemo {
    public static void main(String[] args) {
        // Create Car objects
        Car car1 = new Car("Toyota", "Camry", 2020);
        Car car2 = new Car("Honda", "Civic", 2018);

        // Call the method to display details
        car1.displayDetails();
        car2.displayDetails();
    }
}
