import java.lang.reflect.Method;

public class ReflectionExample {

    public static void main(String[] args) {
        try {
            // Dynamically load the class by name
            Class<?> clazz = Class.forName("SampleClass");

            // Print all declared methods and their parameter types
            Method[] methods = clazz.getDeclaredMethods();
            System.out.println("Methods in class " + clazz.getName() + ":");
            for (Method method : methods) {
                System.out.print(method.getName() + "(");
                Class<?>[] params = method.getParameterTypes();
                for (int i = 0; i < params.length; i++) {
                    System.out.print(params[i].getSimpleName());
                    if (i < params.length - 1) {
                        System.out.print(", ");
                    }
                }
                System.out.println(")");
            }

            // Create an instance of the class (assumes no-arg constructor)
            Object instance = clazz.getDeclaredConstructor().newInstance();

            // Find a specific method to invoke, e.g., 'greet' with String parameter
            Method greetMethod = clazz.getDeclaredMethod("greet", String.class);

            // Invoke the method dynamically
            Object result = greetMethod.invoke(instance, "World");

            System.out.println("Method invocation result: " + result);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
