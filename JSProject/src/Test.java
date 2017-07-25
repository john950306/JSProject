
public class Test {

	public Test() {
		// TODO Auto-generated constructor stub
		
		int num1=10 , num2=20 ; 
		boolean flag = num1>num2;
		String s1, s2;
		s1 = "korea";
		s2 = "";
		int num3 =  s1.compareTo(s2); // 비교해서 같으면 0     b a 비교하면 -1  음수는 작은것  오름차순이면 큰것 a b 
		System.out.println(num3);
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		new Test();
	}

}
