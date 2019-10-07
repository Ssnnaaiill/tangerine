# tangerine 텍본 읽기 프로젝트
> [refernece 1](https://medium.com/@ilonacodes/front-end-shorts-how-to-read-content-from-the-file-input-in-react-17f49b293909)
> [reference 2](https://www.youtube.com/watch?v=MMivyJS49jU&t=504s)

## 개요
**텍본**은 txt 파일형식으로 배포되는 인터넷 소설을 이르는 말입니다. 주로 메모장으로 이러한 텍본을 보고는 했는데, 메모장으로 보기에는 가독성이 떨어져 불편합니다. tangerine은 이러한 문제점을 개선하기 위한 프로젝트입니다.

## 준비
프로젝트에 필요한 모듈들을 설치합니다.
```
$ yarn add styled-components styled-theming local-storage-fallback
```

## components
### TangerineTemplate
애플리케이션의 전체 템플릿입니다.

## Loader
우측 상단의 **불러오기** 버튼을 클릭해 디스크에서 txt 파일을 불러옵니다.

### Displayer

불러온 txt 파일의 내용을 텍스트 영역에 출력합니다. **불러오기** 버튼 좌측의 **토글**을 클릭해서 다크 모드 / 라이트 모드로 변환할 수 있습니다.
