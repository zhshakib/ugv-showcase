<script setup lang="ts">
import { postProject } from '~/store/projects';


const emit = defineEmits(['searchQuery']);

const project = {
    title: '',
    author: '',
    url: '',
    description: '',
    tech: ''
}

const handleSearch = (e: any) => {
    emit('searchQuery', e.target.value);
}

// Take the form elements and put them in the project object
// Then call the postProject function and pass it the project object
const handleSubmit = async (e: any) => {
    e.preventDefault();
    await postProject(project);
    project.title = '';
    project.author = '';
    project.url = '';
    project.description = '';
    project.tech = '';
    // Close the modal
    const modal = document.getElementById('my_modal_2') as HTMLDialogElement;
    modal.close();
    // Refresh the page
    location.reload();
}

</script>

<template>
    <div class="customizeNav navbar bg-base-100">
        <a class="btn btn-ghost text-2xl flex items-center justify-center">
            <span class="text-orange-500">UGV</span> ShowCase
        </a>
        <input type="text" placeholder="Search for tags!" class="input input-bordered w-24 md:w-1/2 md:mr-5"
            @input="handleSearch" />
        <!-- Open the modal using ID.showModal() method -->
        <button class="btn btn-ghost text-sm hover:bg-orange-500 hover:text-white" onclick="my_modal_2.showModal()">Add
            Project</button>
        <dialog id="my_modal_2" class="modal">
            <div class="modal-box flex flex-col items-center justify-center">
                <h3 class="text-lg font-bold">Add A New Project!</h3>
                <p class="py-4">Please fill out the form below</p>
                <form @submit="handleSubmit" method="dialog">
                    <div class="grid grid-cols-1 gap-2">
                        <label class="text-center" for="title">Title</label>
                        <!-- Bind the title to the project object -->
                        <input type="text" placeholder="Project Title" class="input input-bordered w-full max-w-xs"
                            name="title" v-model="project.title">
                        <label class="text-center" for="author">Author</label>
                        <input type="text" placeholder="Project Author" class="input input-bordered w-full max-w-xs"
                            name="author" v-model="project.author">
                        <label class="text-center" for="description">Description</label>
                        <textarea v-model="project.description" name="description"
                            class="textarea textarea-bordered w-full max-w-xs"></textarea>
                        <label class="text-center" for="url">Project URL</label>
                        <input v-model="project.url" type="text" placeholder="Project URL"
                            class="input input-bordered w-full max-w-xs" name="url">
                        <label class="text-center" for="tech">Tech</label>
                        <input type="text" v-model="project.tech" placeholder="Project Tech (, separated)"
                            class="input input-bordered w-full max-w-xs" name="tech">
                        <button class="btn btn-ghost hover:bg-orange-500 hover:text-white"
                            @onclick="handleSubmit">Submit</button>
                    </div>
                </form>
            </div>
        </dialog>
    </div>
</template>

<style>
.customizeNav {
    width: 80%;
    margin: 0px auto;
    padding: 1rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>