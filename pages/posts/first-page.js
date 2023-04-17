import Link from 'next/link'
export default function FirstPage() {
    return (
        <div>
            <h1>2023055169 이다인</h1>
            <ul>
                <h3>교수님 과제가 너무 어려워요</h3>
                <p>"그렇다면 왜 어려웠는가"</p>
                <ol>
                    <li>영어를 너무 못함</li>
                    <li>이상한데서 실수를하는데 그걸 못찾음</li>
                </ol>
                <h3>얼렁뚱땅 과제 일지</h3>

                <pre>
                    <p>4/7   첫시작(노드깔기실패)</p>
                    <p>4/9   재도전(디자인실패)</p>
                    <p>4/10  진짜마지막최종과제내기프로젝트</p>
                </pre>
                
                <h3>느낀점</h3>
                <h4>"낮에 좀 시작하자"</h4>
            </ul>
    
            <Link href="/">Back to home</Link>
        </div>
    )
}