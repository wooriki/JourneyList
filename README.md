# 반갑습니다. lv.4 개인 프로젝트입니다.
### 여행 준비 시 필요 항목에 대해 메모할 수 있는 페이지를 구성해 봤습니다
## 배포 URL
https://journey-list.vercel.app/

## 개발기간
23.07.13 ~ 23.07.15

## API 명세표
https://www.notion.so/80b3ee3242e34816a1f3ddb41a36b862?v=fdb0330147394238ae31f5a0d98e9413
![screencapture-notion-so-80b3ee3242e34816a1f3ddb41a36b862-2023-07-16-21_26_28](https://github.com/wooriki/JourneyList/assets/109304556/521b851c-0ec1-4fd1-9048-fb3cc1e9b41e)

## 주요 기능
1. Main Page - 첫 렌더시 보여지는 페이지이며, 작성자 명과 함께 필요 항목, 메모를 할 수 있게 구성.
   추가하기 클릭 시 Check List Page 이동
* 항목 추가(작성)

2. Check List Page - 추가된 순서에 맞춰 배열을 보여주고 있으며, 클릭 시 해당 id값의 내부 Detail Page로 이동.
* 항목 조회

3. Detail Page - 항목의 contents를 포함하여 수정 삭제 기능 구현.
* 항목 수정 및 삭제

## 트러블 슛팅
개인적으로 문제가 발생하여, 애초에 계획한 시간과 요일보다 너무 늦게 시작하게 되어 많이 무너진 상태로 시작하게 되어 아쉬웠다.</br>
끌어올리는데 꽤 혼자 애를 먹었다. 주변 분들의 도움 덕분에 그래도 여러 시도를 해 볼 수 있었다.</br>
다만 불러 올 때 작명의 문제인지 data : todos 라고 불러왔는데 data를 못 읽어와서 error가 계속 발생하였다.</br>
지급된 강의대로 다시 만들어서 해보면 잘 됐는데, component를 나누고 각 인자들의 명을 바꿔주다 보면 꼬이고 엇나가서</br>
제대로 못 불러오는 사태가 발생하는데 그래도 이전에는 복잡하지 않은 구조라 금방 찾았었는데 이번 프로젝트는 너무 오랜 시간 갈피를 못 잡는 자신을 보면서 스트레스를 받았었다.</br>
뒤늦게 작명해준 이름이 안맞아서 일어나는 error임을 인지하고 천천히 대조해가면서 적용하며 해결했다.</br>

수정과 삭제 기능을 구현하는데 각 버튼 클릭 시 바로 이전 페이지로 넘어가는건 잘 수행되는데, 바로 수정값,</br> 삭제값들이
반영이 안되는 상황이 있었다. refetch도 사용해 보고 여러 방법을 시도해 봤는데 쉽지 않았다.</br>
queryClient로 todo를 호출해 주어 데이터가 바로 업데이트 되도록 변경해 주었다.
