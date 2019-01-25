<template>
    <div class="cards">
        <div class="card" v-bind:key="doc.uid" v-for="doc in docs">
        <img v-bind:src="doc.profile.image_url" alt="" class="card-img-top" style="height: 250px">
        <div class="card-body">
            <h5 class="card-title">
                {{ doc.profile.first_name  }} {{ doc.profile.last_name }}
            </h5>
            <p class="card-text text-truncate">{{ doc.profile.bio }}</p>
            <a @click="goToProfile(doc)" class="btn btn-primary text-white">View Profile</a>
        </div>
        <div class="card-footer bg-transparent">{{ doc.profile.title }}</div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'card',
    props: {
        docs: Array,
    },
    methods: {
        goToProfile(doc) {
            this.$router.push({ name: `doctor`, params: { doc }});
        }
    }
}
</script>

<style scoped>
.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
}

@media (max-width: 900px) {
    .cards {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 500px) {
    .cards {
        grid-template-columns: 1fr;
    }
}
</style>


