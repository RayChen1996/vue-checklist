<script setup>
import { ref, onMounted, computed } from "vue";
import { Plus, XIcon, Edit } from "lucide-vue-next";
import { useAuthStore } from "../Store/auth";
const todos = ref([]);
const authStore = useAuthStore();
const token = ref("");
const newTodoText = ref("");
const categoryName = ref("all");
const notCompleteLen = ref(0);
// 獲取環境變數
const apiUrl = import.meta.env.VITE_URL;

const fetchTodos = async () => {
  const response = await fetch(`${apiUrl}todos/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `${token.value}`,
    },
  });
  const data = await response.json();

  todos.value = data.data || [];
  switch (categoryName?.value) {
    case "all":
      break;
    case "not":
      todos.value = todos.value.filter((item) => !item.status);
      break;

    case "complete":
      todos.value = todos.value.filter((item) => item.status);

      break;

    default:
      break;
  }
  const _notCompleteLen = computed(() => {
    return todos.value.filter((item) => !item.status).length;
  });
  notCompleteLen.value = _notCompleteLen;
  // console.log("未完成數", notCompleteLen);
  // console.log(todos.value);
};

const handleDeleteCompleted = () => {
  todos.value.forEach((item, idx) => {
    // console.log(item.id);
    if (item.status) {
      handleClickDelTodo(item.id);
    }
  });
};

const showToggleList = (category) => {
  categoryName.value = category;
  fetchTodos();
};

const handleClickAddTodo = async () => {
  if (newTodoText.value === "") return;
  // console.log(token.value);
  const response = await fetch(`${apiUrl}todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `${token.value}`,
    },
    body: JSON.stringify({
      content: newTodoText.value,
    }),
  });
  const data = await response.json();

  if (response.ok) {
    newTodoText.value = "";

    fetchTodos();
  } else {
    console.error("登入失敗", data.message);
  }
};

const handleClickDelTodo = async (id) => {
  // console.log(token.value);
  const response = await fetch(`${apiUrl}todos/${id}`, {
    method: "Delete",
    headers: {
      "Content-Type": "application/json",
      authorization: `${token.value}`,
    },
    body: JSON.stringify({
      id,
    }),
  });
  const data = await response.json();

  if (response.ok) {
    newTodoText.value = "";

    fetchTodos();
  } else {
    console.error("登入失敗", data.message);
  }
};

const handleClickToggleTodo = async (id) => {
  // console.log(token.value);
  const response = await fetch(`${apiUrl}todos/${id}/toggle`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `${token.value}`,
    },
  });
  const data = await response.json();

  if (response.ok) {
    newTodoText.value = "";

    fetchTodos();
  } else {
    console.error("登入失敗", data.message);
  }
};

const handleClickPutTodo = async (obj) => {
  const { id, content } = obj;
  // console.log(token.value);
  const response = await fetch(`${apiUrl}todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `${token.value}`,
    },
    body: JSON.stringify({
      content,
    }),
  });
  const data = await response.json();

  if (response.ok) {
    newTodoText.value = "";

    fetchTodos();
  } else {
    console.error("登入失敗", data.message);
  }
};

const handelOpenEditModal = (obj) => {
  // document.getElementById("my_modal_1").showModal();
  // alert(obj.content);
  const userInput = prompt("請輸入內容", obj.content);
  if (userInput !== null) {
    // alert(`你輸入的內容是: ${userInput}`);
    const newContent = {
      id: obj.id,
      content: userInput,
    };
    handleClickPutTodo(newContent);
  }
};
onMounted(() => {
  token.value = authStore.token;

  fetchTodos();
});
</script>
<template>
  <div>
    <div
      class="input input-md items-center justify-around relative w-11/12 lg:w-2/3 m-auto"
    >
      <input
        type="text"
        v-model="newTodoText"
        placeholder="新增待辦事項"
        class="h-full w-full"
        @keyup.enter="handleClickAddTodo"
      />
      <Plus
        @click="handleClickAddTodo"
        class="bg-[#333333] h-full w-20 text-white rounded-md absolute right-0 top-0"
      />
    </div>
  </div>
  <div class="w-11/12 lg:w-2/3 rounded-t-md mt-3 m-auto bg-white">
    <ul class="flex text-center gap-3 pt-3 w-full [&>li]:cursor-pointer">
      <li @click="showToggleList('all')" class="w-1/3">全部</li>
      <li @click="showToggleList('not')" class="w-1/3">待完成</li>
      <li @click="showToggleList('complete')" class="w-1/3">已完成</li>
    </ul>
    <div>
      <ul class="flex w-full">
        <li
          :class="[
            'h-1',
            'w-[33%]',
            categoryName === 'all' ? 'bg-black h-1' : '',
          ]"
        ></li>
        <li
          :class="[
            'h-1',
            'w-[33%]',
            categoryName === 'not' ? 'bg-black h-1' : '',
          ]"
        ></li>
        <li
          :class="[
            'h-1',
            'w-[33%]',
            categoryName === 'complete' ? 'bg-black h-1' : '',
          ]"
        ></li>
      </ul>
    </div>
  </div>

  <div
    class="w-2/3 rounded-b-md flex justify-center items-center flex-col m-auto min-h-96"
    v-if="todos.length === 0"
  >
    目前尚無待辦事項
    <img src="/empty.png" alt="" />
  </div>
  <div
    v-else
    class="w-11/12 lg:w-2/3 rounded-b-md m-auto bg-white min-h-24 shadow-sm"
  >
    <ul class="pt-3">
      <li
        v-for="i in todos"
        :key="i.id"
        class="flex gap-3 items-center my-2 mt-2 relative"
      >
        <input
          @change="handleClickToggleTodo(i.id)"
          type="checkbox"
          name=""
          class="checkbox checkbox-md"
          :checked="i.status"
          :id="i.id"
        />
        <label :for="i.id" :class="[i.status ? ' line-through' : 'none']">
          {{ i.content }}
        </label>

        <span
          @click="handelOpenEditModal(i)"
          class="absolute cursor-pointer right-8"
        >
          <Edit class="w-5 text-gray-400" />
        </span>

        <span
          class="absolute cursor-pointer right-2"
          @click="handleClickDelTodo(i.id)"
        >
          <XIcon class="w-5 text-gray-400" />
        </span>
      </li>
    </ul>

    <div class="flex justify-between px-5 py-3">
      <span>{{ notCompleteLen }} 個待完成項目</span>
      <span @click="handleDeleteCompleted">清除已完成項目</span>
    </div>
  </div>
  <dialog id="my_modal_1" className="modal">
    <div className="modal-box">
      <h3 className="font-bold text-lg">Hello!</h3>
      <p className="py-4">Press ESC key or click the button below to close</p>
      <div className="modal-action">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<style></style>
