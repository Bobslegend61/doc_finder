<template>
    <div class="doctor">
        <i class="fa fa-arrow-left fa-2x" aria-hidden="true" @click="goToHome"></i>
        <div class="personal-info">
            <img v-bind:src="doc.profile.image_url" alt="image">
            <div>
                <p><strong>Title:</strong> {{ doc.profile.title }}</p>
                <p><strong>Name:</strong> {{ doc.profile.first_name }} {{ doc.profile.middle_name }}  {{ doc.profile.last_name }}</p>
                <p><strong>Gender:</strong> {{ doc.profile.gender }}</p>
                <p><strong>Languages:</strong> <span v-bind:key="lang.code" v-for="lang in doc.profile.languages"> {{ lang.name }},</span></p>
                <p><strong>Bio:</strong> {{ doc.profile.bio }}</p>
                <p><strong>Education:</strong> 
                    <span v-if="doc.educations.length == 0"> No educational information provided.</span>
                    <ol v-else>
                        <li v-for="(school, index) in doc.educations" v-bind:key="index">
                            <p v-if="school.degree">Degree: {{ school.degree }}</p>
                            <p>School: {{ school.school }}</p>
                        </li>
                    </ol>
                </p>
                <p><strong>Specialties:</strong> 
                    <ol>
                        <li v-bind:key="spec.uid" v-for="spec in doc.specialties">{{ spec.name }} - {{ spec.description }} - {{ spec.category }}</li>
                    </ol>
                </p>
                <p><strong>Practices:</strong> 
                    <ol>
                        <li v-bind:key="practice.uid" v-for="practice in doc.practices">
                            <p><strong>Name:</strong> {{ practice.name}}</p>
                            <p><strong>Distance:</strong> {{ Math.round(practice.distance)}} miles</p>
                            <p><strong>Website:</strong> <span v-if="!practice.website" class="text-danger"> not avaliable</span><a target="_blank" v-else v-bind:href="practice.website"> {{ practice.website}}</a></p>
                            <p><strong>Accept patients:</strong> <span v-bind:class="practice.accepts_new_patients ? 'text-success' : 'text-danger'"> {{ practice.accepts_new_patients ? 'Yes' : 'no'}}</span></p>
                            <p><strong>Address:</strong> {{ practice.visit_address.street }}, {{ practice.visit_address.city }} {{ practice.visit_address.state_long }}</p>
                            <p><strong>Contacts:</strong> 
                                <ol>
                                    <li v-bind:key="phone.type" v-for="phone in practice.phones">
                                        {{ phone.number }} - {{ phone.type }}
                                    </li>
                                </ol>
                            </p>
                            <p><strong>Languages:</strong> 
                                <ol>
                                    <li v-bind:key="lang.code" v-for="lang in practice.languages">
                                        {{ lang.name }}
                                    </li>
                                </ol>
                            </p>
                        </li>
                    </ol>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'doctor',
    props: {
        doc: Object
    },
    methods: {
        goToHome() {
            history.go(-1);
        }
    }
}
</script>

<style scoped>
    .doctor {
        padding: 0 10px 0 10px;
    }

    .personal-info {
        margin-top: 20px;
    }

    .personal-info > div {
        text-align: justify;
        background: #fff;
        padding: 20px 10px 0 10px;
    }

    ol {
        padding: 5px 15px;
    }

    .fa {
        margin-top: 10px;
    }
</style>

