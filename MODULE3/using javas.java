Compiled from "SimpleClass.java"
public class SimpleClass {
  public SimpleClass();
    Code:
       0: aload_0
       1: invokespecial #1                  // Method java/lang/Object."<init>":()V
       4: return

  public int add(int, int);
    Code:
       0: iload_1
       1: iload_2
       2: iadd
       3: ireturn

  public static void main(java.lang.String[]);
    Code:
       0: new           #2                  // class SimpleClass
       3: dup
       4: invokespecial #3                  // Method "<init>":()V
       7: astore_1
       8: aload_1
       9: iconst_5
      10: iconst_3
      11: invokevirtual #4                  // Method add:(II)I
      14: istore_2
      15: getstatic     #5                  // Field java/lang/System.out:Ljava/io/PrintStream;
      18: new           #6                  // class java/lang/StringBuilder
      21: dup
      22: invokespecial #7                  // Method java/lang/StringBuilder."<init>":()V
      25: ldc           #8                  // String Result:
      27: invokevirtual #9                  // Method java/lang/StringBuilder.append:(Ljava/lang/String;)Ljava/lang/StringBuilder;
      30: iload_2
      31: invokevirtual #10                 // Method java/lang/StringBuilder.append:(I)Ljava/lang/StringBuilder;
      34: invokevirtual #11                 // Method java/lang/StringBuilder.toString:()Ljava/lang/String;
      37: invokevirtual #12                 // Method java/io/PrintStream.println:(Ljava/lang/String;)V
      40: return
}
