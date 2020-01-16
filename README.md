# Installation
####1. 소스코드 클론 
```
>> git clone http://192.168.0.22/dwkim/MineViewer-OHIF.git
```  
####2. 브랜치 확인
- 폴더 내부로 이동 후 브랜치 확인
```
>> cd MineViewer-OHIF
>> git branch
HDT2.0
```
####3. HDT2.0 브랜치 에서 설치 진행
```
>> yarn install
```
####4. 라이브러리 패치 (수작업)
- 경로이동 후, 파일 복사
```$xslt
>> cd jhjin-patch
>> cp -rf dist node_modules/cornerstone-tools/dist
```
```
>> ls node_modules/cornerstone-tools/dist
cornerstoneTools.js   cornerstoneTools.js.map   cornerstoneTools.min.js   cornerstoneTools.min.js.map
```
####5. 실행
```$xslt
>> yarn start
```