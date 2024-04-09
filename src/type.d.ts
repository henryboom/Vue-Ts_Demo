// 定义断言类型
export type Todo = {
    id: number;
    name: string;
    completed: boolean;
};


// 定义断言类型
// 给props传入的参数加上断言
export type TitleInfo = {
    //标题的值
    value: string;

    //标题的颜色
    color: string;
}
