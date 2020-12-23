<template>
    <div>
    <b-jumbotron>
        <template v-slot:header>Questions</template>
        <p>{{currentQuestion.question}}</p>
        <hr class="my-4">

        <b-button variant="primary" href="#">Submit</b-button>
        <b-button variant="success" @click="next()">Next</b-button>
    </b-jumbotron>
</div>
</template>

<script>
export default {
    props:{
        currentQuestion: Object,
        next: Function
    }
}
</script>>