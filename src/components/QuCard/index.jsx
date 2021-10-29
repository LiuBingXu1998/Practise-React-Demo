import React from 'react';
import { Card, Button } from 'antd';

import questions from '../../assets/questions';

import './index.less';

export default function QuCard() {
    const [type, question, answer] = React.useState('');

    const nextQuButton = (
        <Button>下一题</Button>
    )

    const showAnButton = (
        <Button>查看答案</Button>
    )

    /**
     * 更新状态值
     */
    const upDateState = () => {
        // 获取问题数组的长度
        const length = questions.length;
        // 根据数组的长度生成随机值

        // 从数组中获取对应的问题对象

        // 赋值给对应的state
    }

    React.useEffect(() => {
        console.log(question.length);
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
            </Card>

            <Card
                className="answer"
                title="答案"
                extra={showAnButton}
            >
            </Card>
        </Card>
    )
}

