<script>
      /* eslint-disable */
    export default {
        computed: {
            name () {
                return this.$store.state.usuario.name
            },
            time () {
                return this.$store.state.usuario.time
            }
        }
    }
</script>

<template>
    <div>
    <v-chip color="green" text-color="white">
        <v-avatar>
            <v-icon>account_circle</v-icon>
        </v-avatar>
        {{ name }}    //    {{time}}</v-chip>    
    </div>
</template>