<script setup lang="ts">
interface Form {
  email: string;
  password: string;
  street: string;
  city: string;
  postcode: string;
  country: string;
}

const form = ref<Form>({
  email: "",
  password: "",
  street: "",
  city: "",
  postcode: "",
  country: "",
});

const errors = ref<Record<keyof Form, string | null>>({
  email: null,
  password: null,
  street: null,
  city: null,
  postcode: null,
  country: null,
});

const notification = ref<string | null>(null);

function validateForm() {
  let isValid = true;
  Object.keys(form.value).forEach((key) => {
    if (!(form.value as any)[key]) {
      (errors.value as any)[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      isValid = false;
    } else {
      errors.value[key as keyof Form] = "";
    }
  });
  return isValid;
}

function resetForm() {
  form.value = {
    email: "",
    password: "",
    street: "",
    city: "",
    postcode: "",
    country: "",
  };
  errors.value = {
    email: null,
    password: null,
    street: null,
    city: null,
    postcode: null,
    country: null,
  };
}

async function handleForm() {
  if (validateForm()) {
    const res: Response = await $fetch("/api/user/create", {
      method: "POST",
      body: form.value,
    });
    if (res.status === 201) {
      notification.value = "User created successfully!";
      setTimeout(() => {
        notification.value = null;
      }, 3000);
      resetForm();
    }
  }
}
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div class="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 w-1/4">
      <h1 class="text-2xl font-bold mb-4">Test User Creation Form</h1>
      <form @submit.prevent="handleForm">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email"> Email </label>
          <input v-model="form.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
          <p v-if="errors.email" class="text-red-500 text-xs italic">{{ errors.email }}</p>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password"> Password </label>
          <input v-model="form.password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
          <p v-if="errors.password" class="text-red-500 text-xs italic">{{ errors.password }}</p>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="street"> Street </label>
          <input v-model="form.street" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="street" type="text" placeholder="Street" />
          <p v-if="errors.street" class="text-red-500 text-xs italic">{{ errors.street }}</p>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="city"> City </label>
          <input v-model="form.city" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" placeholder="City" />
          <p v-if="errors.city" class="text-red-500 text-xs italic">{{ errors.city }}</p>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="postcode"> Postcode </label>
          <input v-model="form.postcode" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="postcode" type="text" placeholder="Postcode" />
          <p v-if="errors.postcode" class="text-red-500 text-xs italic">{{ errors.postcode }}</p>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="country"> Country </label>
          <input v-model="form.country" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="country" type="text" placeholder="Country" />
          <p v-if="errors.country" class="text-red-500 text-xs italic">{{ errors.country }}</p>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Create User</button>
        </div>
      </form>
    </div>
    <div v-if="notification" class="fixed bottom-0 right-0 m-4 p-4 bg-green-500 text-white rounded">
      {{ notification }}
    </div>
  </div>
</template>