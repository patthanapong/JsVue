<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="/js/vue.js"></script>
    {{-- <script src="https://unpkg.com/vue"></script> --}}
    {{-- <script src="https://cdn.jsdelivr.net/npm/vue@2.5.7/dist/vue.js"></script> --}}
    
</head>
<body>
<div id="demo">
    <button v-on:click="show = !show">
        Toggle
    </button>
    <transition name="fade">
        <p v-if="show">hello</p>
    </transition>
</div>

<script>
    new Vue({
    el: '#demo',
    data: {
        show: true
    }
    })
</script>
<style> 
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
</body>
</html>