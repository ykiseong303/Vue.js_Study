export default {
    template : `
        <button @click="addCount">컴포넌트의 카운트 : {{ count }}</button>
    `,
    data () {
        return {
            count : 0,
        } 
    },
    methods : {
        addCount() {
            this.count += 1;
            this.$emit('send-count');
        }
    }
}