package json.vo;

import java.util.ArrayList;

public class Lists {
	private String status ;
	private int count ;
	private ArrayList<Border> list= new ArrayList<Border>();
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	public ArrayList<Border> getList() {
		return list;
	}
	public void setList(ArrayList<Border> list) {
		this.list = list;
	}
	@Override
	public String toString() {
		return "Lists [status=" + status + ", count=" + count + ", list=" + list + "]";
	}
	
	
}
