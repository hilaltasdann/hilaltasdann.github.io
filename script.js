new Vue({
    el: '#app',
    data: function(){
        return {
            options: {
                afterLoad: this.afterLoad,
                navigation: true,
                anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
                sectionsColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
                slidesNavigation: true,
                navigationTooltips: ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Page 5'],
                showActiveTooltip: true,
            },
        }
    },
});