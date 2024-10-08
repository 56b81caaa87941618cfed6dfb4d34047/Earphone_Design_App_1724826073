<!-- 
INSTRUCTION: Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
-->
<template>
    <section id="cta-component" class="bg-gradient-to-br from-pink-500 to-purple-700 flex-1 py-16" style=""><div id="cta-inner-container" class="max-w-screen-xl px-6 mx-auto" style=""><div id="cta-content" class="max-w-screen-sm mx-auto text-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8" style=""><div id="cta-title-container" class="flex mb-4"><h2 id="cta-title" class="flex-1 text-3xl font-extrabold leading-tight tracking-tight text-white">
                        Discover Your Sound
                    </h2></div> <div id="cta-subtitle-container" class="flex mb-8"><p id="cta-subtitle" class="flex-1 text-lg font-light text-pink-100" style="">
                        Transform your audio vision into reality with our cutting-edge earphone manufacturing solution
                    </p></div> <div id="cta-button-container" class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4" style=""><a id="cta-button" href="#" class="flex-1 text-purple-900 bg-pink-300 hover:bg-pink-400 focus:ring-4 focus:ring-pink-200 font-medium rounded-lg text-lg px-6 py-3 transition duration-300 ease-in-out transform hover:scale-105" style="" data-mf-new="true">This is Us from the Explorer</a> <a id="nine-button" href="#" class="flex-1 text-pink-100 bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-6 py-3 transition duration-300 ease-in-out transform hover:scale-105" style=""><i class="bx bx-rocket mr-2"></i>
                        Explore More
                    </a></div></div></div></section>
</template>
</template>

<script>
export default {
    data() {
        return {
            expanded: false,
            tab: null
        };
    }
};
</script>
