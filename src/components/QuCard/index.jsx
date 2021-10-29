import React from 'react';
import { Card, Button } from 'antd';

import questions from '../../assets/questions';

import './index.less';

export default function QuCard() {
    const [type, setType] = React.useState("");
    const [question, setQuestion] = React.useState("");
    const [answer, setAnswer] = React.useState("");
    const [isShowAnswer, setIsShowAnswer] = React.useState(false);

    /**
     * 更新状态值
     */
    const upDateState = () => {
        // 获取问题数组的长度
        const length = questions.length;

        switch (length) {
            case 0:
                setType("");
                setQuestion("暂时没有数据！");
                setAnswer("暂时没有数据！");
                setIsShowAnswer(false);
                break;
            default:
                // 根据数组的长度生成随机值
                const num = Math.floor(Math.random() * length);
                // 从数组中获取对应的问题对象
                const questionObj = questions[num];
                // 赋值给对应的state
                setType(questionObj.type);
                setQuestion(questionObj.question);
                setAnswer(questionObj.answer);
                setIsShowAnswer(false);
        }
    }

    /**
     * 显示答案
     */
    const showAnswer = () => {
        setIsShowAnswer(true);
    }

    const nextQuButton = (
        <Button onClick={upDateState}>下一题</Button>
    )

    const showAnButton = (
        <Button onClick={showAnswer}>查看答案</Button>
    )

    React.useEffect(() => {
        upDateState();
    }, []);

    return (
        <Card
            className="quCard"
            title="初级前端工程师面试题"
            headStyle={{ textAlign: "center" }}

        >
            <Card
                className="question"
                title="问题"
                extra={nextQuButton}
            >
                {
                    <div>
                        <div>问题类型：{type}</div>
                        <div>问题：{question}</div>
                    </div>
                }
            </Card>

            <Card
                className="answer"
                title="答案"
                extra={showAnButton}
            >
                {isShowAnswer ? answer : ""}
            </Card>
        </Card>
    )
}

