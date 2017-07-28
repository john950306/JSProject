package json.parser;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import json.vo.Border;
import json.vo.Lists;

public class ListParser {

	public Lists doListParser(String json){
		Lists lists = null;
		JSONObject obj = null;
		
		try {
			
			obj = new JSONObject(json);
			lists = new Lists();
			lists.setStatus(obj.getString("status"));
			lists.setCount(obj.getInt("count"));
			
			//리스트 가져오기 
			JSONArray list =obj.getJSONArray("list");
			JSONObject listob = null;
			Border border = null;
			for(int i = 0 ; i < list.length(); i++) {
				border = new Border();
				listob  = list.getJSONObject(i);
				border.setNum(listob.getInt("num"));
				border.setTitle(listob.getString("title"));
				border.setWriter(listob.getString("writer"));
				border.setContent(listob.getString("content"));
				border.setCnt(listob.getInt("cnt"));
				border.setState(listob.getBoolean("state"));
				lists.getList().add(border);
			}
			
			
			
		}catch(JSONException e ) {
			System.out.println("파싱에러"+e);
		}
		
		
		
		
		
		
		
		
		
		
		return lists;
	}

}
