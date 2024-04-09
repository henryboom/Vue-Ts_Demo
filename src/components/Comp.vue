<template>
    <div :style="{ backgroundColor: titleInfo.color }"> {{ titleInfo.value }}</div>
    <div>
        {{ counter }}

    </div>
    <div>
        {{ DoubleCounter }}

    </div>

    <button @click="add">+</button>
    <div v-for="item in items" :key="item.id" @click="toggleStatus(item.id)">{{ item.name }} {{ item.completed }}
    </div>
    <button @click="addItem">Add Item</button>

    <!-- 新增待办事项 -->
    <input type="text" v-model="todoName" @keydown.enter="addTodo(newTodo(todoName))">
</template>

<!-- <script lang="ts">
import { defineComponent, ref, PropType, computed } from 'vue';

// 定义断言类型
type Todo = {
    id: number;
    name: string;
    completed: boolean;
};

// 给props传入的参数加上断言
type TitleInfo = {
    //标题的值
    value: string;

    //标题的颜色
    color: string;
}
export default defineComponent({
    props: {
        titleInfo: {
            //引入类型加上泛型
            type: Object as PropType<TitleInfo>,
            required: true
        }
    },
    setup() {


        // 使用 ref 创建响应式变量
        const counter = ref(1);
        const DoubleCounter = computed(() => {
            return counter.value * 2
        })
        // 使用 ref 创建一个空数组
        const items = ref([] as Todo[]);

        // 定义添加函数
        const add = () => {
            counter.value++; // 递增计数器的值
        };
        // 定义添加项的函数
        const addItem = () => {
            // 使用 value 来访问和修改 ref 的值
            items.value.push({
                id: items.value.length + 1,
                name: `Item ${items.value.length + 1}`,
                completed: false
            });
        };
        //改变状态
        const toggleStatus = (id: number) => {
            console.log('接收到' + id);

            //过滤数组方式
            // const foundItem = items.value.filter(item => item.id === id)
            // foundItem.forEach(item => {
            //     item.completed = !item.completed;
            // })
            const foundItem = items.value.find(item => item.id === id);
            if (foundItem) {
                foundItem.completed = !foundItem.completed;
            }
        }

        //新增待办事项
        //创建一个事项的名称
        // let todoName = ''
        function newTodo(todoName: string): Todo {
            return {
                id: items.value.length + 1,
                name: todoName,
                completed: false
            }
        }

        function addTodo(todo: Todo): void {
            items.value.push(todo)
        }
        // 在 setup 函数中初始化数据和函数，并返回它们
        return { counter, DoubleCounter, items, add, addItem, toggleStatus, newTodo, addTodo };
    },

    created() {
        // 如果您需要在组件创建时进行一些额外的操作，可以继续使用 created 钩子
    }
});
</script> -->
<script lang="ts" setup>
import { defineComponent, ref, PropType, computed, defineProps } from 'vue';
import { Todo, TitleInfo } from "../type.d.ts";
// 传入的属性的声明
defineProps({
    titleInfo: {
        type: Object as PropType<TitleInfo>,
        required: true,
    }
})



//加法逻辑
const counter = ref(1);
const DoubleCounter = computed(() => counter.value * 2)
// 定义添加函数
const add = () => {
    counter.value++; // 递增计数器的值
};



//操作待办事项 的逻辑
// 定义默认添加项的函数
const addItem = () => {
    // 使用 value 来访问和修改 ref 的值
    items.value.push({
        id: items.value.length + 1,
        name: `Item ${items.value.length + 1}`,
        completed: false
    });
};
//改变状态
const toggleStatus = (id: number) => {
    console.log('接收到' + id);

    //过滤数组方式
    // const foundItem = items.value.filter(item => item.id === id)
    // foundItem.forEach(item => {
    //     item.completed = !item.completed;
    // })
    const foundItem = items.value.find(item => item.id === id);
    if (foundItem) {
        foundItem.completed = !foundItem.completed;
    }
}

// 使用 ref 创建一个空数组
const items = ref([] as Todo[]);
const todoName = ref('')
//原本的created可以直接写在setup,渲染直接执行
items.value.push({
    id: 1,
    name: "vue3",
    completed: false
})
//新增输入的待办事项
const newTodo = (todoName: string): Todo => {
    return {
        id: items.value.length + 1,
        name: todoName,
        completed: false
    }
}
//添加到数组中
const addTodo = (todo: Todo): void => {
    items.value.push(todo);
    // 将临时变量todoName置空方便下次使用
    todoName.value = ''
}

</script>
<style scoped>
/* 可选的样式 */
</style>
