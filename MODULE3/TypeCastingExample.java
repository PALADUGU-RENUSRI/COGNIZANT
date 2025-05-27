public class TypeCastingExample {
    public static void main(String[] args) {
        // Declare a double and cast it to an int (explicit casting)
        double myDouble = 9.78;
        int myIntFromDouble = (int) myDouble; // Explicit cast
        System.out.println("Original double value: " + myDouble);
        System.out.println("Double cast to int: " + myIntFromDouble);

        // Declare an int and cast it to a double (implicit casting)
        int myInt = 25;
        double myDoubleFromInt = myInt; // Implicit cast
        System.out.println("Original int value: " + myInt);
        System.out.println("Int cast to double: " + myDoubleFromInt);
    }
}
