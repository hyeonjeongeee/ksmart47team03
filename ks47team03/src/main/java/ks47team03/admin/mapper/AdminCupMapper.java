package ks47team03.admin.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import ks47team03.user.dto.Cup;
import ks47team03.user.dto.Static;


@Mapper
public interface AdminCupMapper {

	//엑셀 업로드
	public int addDiscardCupByExcelFile(List<Cup> discardCupList);
	//폐기컵 
	public List<Cup> getAllDiscardCupQRList();
	//폐기컵 조회
	public List<Map<String,Object>> getDiscardCupList (Map<String,Object>paramMap);
	//폐기컵 전체 행 조회
	public int getDiscardCupListCount();
	//체크 된 컵 삭제
	public void removeDiscardCup(List<String> cupQRArr);
	//체크 된 컵 삭제
	public void removeCupState(List<String> cupQRArr);
	//한개 컵 상태 수정
	public int modifyCupState(Cup cup);
	//한개의 컵 상태 조회
	public Cup getCupInfoByQR(String cupQR);
	//컵 상태코드 리스트 조회
	public List<Static> getCupStaticList();
	//컵 상태 전체 리스트 조회
	public List<Map<String,Object>> getCupStateList (Map<String,Object>paramMap);
	//컵 재고 전체 리스트 조회
	public List<Map<String,Object>> getCupStockList (Map<String,Object>paramMap);
	//컵 재고 리스트 갯수
	public int getCupStockListCount();
	//컵 상태 리스트 갯수
	public int getCupStateListCount();
	//컵 상태 리스트 갯수
	public int getCupStateListCount(Map<String,Object>paramMap);
	//컵 전체 이용 내역 조회
	public List<Map<String,Object>> getCupManageList (Map<String,Object>paramMap);
	//컵 이용 내역 리스트 갯수
	public int getCupManageListCount();
}
