(function () {
  'use strict';
  angular.module('app', [
        'ngRoute'
      ,'ngAnimate'
      ,'ngAria'

      // 
      ,'ui.bootstrap'
      ,'easypiechart'
      ,'mgo-angular-wizard'
      ,'textAngular'
      ,'angular-loading-bar'
      ,'duScroll'

      // 
      ,'app.layout'
      ,'app.localization'
      ,'app.ui'
      ,'app.ui.form'
      ,'app.localization'
      ,'app.table'
      ,'app.chart'
    ])
})(); 


;
(function () {
  'use strict';

  angular.module('app.chart', []);
})(); 
;
(function () {
    'use strict';

    angular.module('app.ui.form', []);
})(); 
;
(function () {
  'use strict';

  angular.module('app.layout', []);

})(); 
;
(function () {
  'use strict';

  angular.module('app.table', []);
})(); 
;
(function () {
  'use strict';

  angular.module('app.ui', []);
})(); 
;
(function () {
  'use strict';
  angular.module('app.chart').controller('ChartCtrl', [
    '$scope', function($scope) {
      $scope.easypiechart = {
        percent: 65,
        options: {
          animate: {
            duration: 1000,
            enabled: true
          },
          barColor: '#1C7EBB',
          lineCap: 'round',
          size: 180,
          lineWidth: 5
        }
      };
      $scope.easypiechart2 = {
        percent: 35,
        options: {
          animate: {
            duration: 1000,
            enabled: true
          },
          barColor: '#23AE89',
          lineCap: 'round',
          size: 180,
          lineWidth: 10
        }
      };
      $scope.easypiechart3 = {
        percent: 68,
        options: {
          animate: {
            duration: 1000,
            enabled: true
          },
          barColor: '#2EC1CC',
          lineCap: 'square',
          size: 180,
          lineWidth: 20,
          scaleLength: 0
        }
      };
      $scope.gaugeChart1 = {
        data: {
          maxValue: 3000,
          animationSpeed: 40,
          val: 1375
        },
        options: {
          lines: 12,
          angle: 0,
          lineWidth: 0.47,
          pointer: {
            length: 0.6,
            strokeWidth: 0.03,
            color: '#000000'
          },
          limitMax: 'false',
          colorStart: '#A3C86D',
          colorStop: '#A3C86D',
          strokeColor: '#E0E0E0',
          generateGradient: true,
          percentColors: [[0.0, '#A3C86D'], [1.0, '#A3C86D']]
        }
      };
      $scope.gaugeChart2 = {
        data: {
          maxValue: 3000,
          animationSpeed: 45,
          val: 1200
        },
        options: {
          lines: 12,
          angle: 0,
          lineWidth: 0.47,
          pointer: {
            length: 0.6,
            strokeWidth: 0.03,
            color: '#464646'
          },
          limitMax: 'true',
          colorStart: '#7ACBEE',
          colorStop: '#7ACBEE',
          strokeColor: '#F1F1F1',
          generateGradient: true,
          percentColors: [[0.0, '#7ACBEE'], [1.0, '#7ACBEE']]
        }
      };
      return $scope.gaugeChart3 = {
        data: {
          maxValue: 3000,
          animationSpeed: 50,
          val: 1100
        },
        options: {
          lines: 12,
          angle: 0,
          lineWidth: 0.47,
          pointer: {
            length: 0.6,
            strokeWidth: 0.03,
            color: '#464646'
          },
          limitMax: 'true',
          colorStart: '#FF7857',
          colorStop: '#FF7857',
          strokeColor: '#F1F1F1',
          generateGradient: true,
          percentColors: [[0.0, '#FF7857'], [1.0, '#FF7857']]
        }
      };
    }
  ]).controller('SparklineCtrl', [
    '$scope', function($scope) {
      $scope.demoData1 = {
        data: [3, 1, 2, 2, 4, 6, 4, 5, 2, 4, 5, 3, 4, 6, 4, 7],
        options: {
          type: 'line',
          lineColor: '#fff',
          highlightLineColor: '#fff',
          fillColor: '#23AE89',
          spotColor: false,
          minSpotColor: false,
          maxSpotColor: false,
          width: '100%',
          height: '150px'
        }
      };
      $scope.simpleChart1 = {
        data: [3, 1, 2, 3, 5, 3, 4, 2],
        options: {
          type: 'line',
          lineColor: '#1FB5AD',
          fillColor: '#bce0df',
          spotColor: false,
          minSpotColor: false,
          maxSpotColor: false
        }
      };
      $scope.simpleChart2 = {
        data: [3, 1, 2, 3, 5, 3, 4, 2],
        options: {
          type: 'bar',
          barColor: '#1FB5AD'
        }
      };
      $scope.simpleChart3 = {
        data: [3, 1, 2, 3, 5, 3, 4, 2],
        options: {
          type: 'pie',
          sliceColors: ['#1fb5ad', '#95b75d', '#57c8f1', '#8175c7', '#f3c022', '#fa8564']
        }
      };
      $scope.tristateChart1 = {
        data: [1, 2, -3, -5, 3, 1, -4, 2],
        options: {
          type: 'tristate',
          posBarColor: '#95b75d',
          negBarColor: '#fa8564'
        }
      };
      $scope.largeChart1 = {
        data: [3, 1, 2, 3, 5, 3, 4, 2],
        options: {
          type: 'line',
          lineColor: '#674E9E',
          highlightLineColor: '#7ACBEE',
          fillColor: '#927ED1',
          spotColor: false,
          minSpotColor: false,
          maxSpotColor: false,
          width: '100%',
          height: '150px'
        }
      };
      $scope.largeChart2 = {
        data: [3, 1, 2, 3, 5, 3, 4, 2],
        options: {
          type: 'bar',
          barColor: '#A3C86D',
          barWidth: 10,
          width: '100%',
          height: '150px'
        }
      };
      return $scope.largeChart3 = {
        data: [3, 1, 2, 3, 5],
        options: {
          type: 'pie',
          sliceColors: ['#A3C86D', '#7ACBEE', '#927ED1', '#FDD761', '#FF7857', '#674E9E'],
          width: '150px',
          height: '150px'
        }
      };
    }
  ]);
})(); 


;
(function () {
  'use strict';
  angular.module('app.chart').directive('gaugeChart', [
    function() {
      return {
        restrict: 'A',
        scope: {
          data: '=',
          options: '='
        },
        link: function(scope, ele, attrs) {
          var data, gauge, options;
          data = scope.data;
          options = scope.options;
          gauge = new Gauge(ele[0]).setOptions(options);
          gauge.maxValue = data.maxValue;
          gauge.animationSpeed = data.animationSpeed;
          return gauge.set(data.val);
        }
      };
    }
  ]).directive('flotChart', [
    function() {
      return {
        restrict: 'A',
        scope: {
          data: '=',
          options: '='
        },
        link: function(scope, ele, attrs) {
          var data, options, plot;
          data = scope.data;
          options = scope.options;
          return plot = $.plot(ele[0], data, options);
        }
      };
    }
  ]).directive('flotChartRealtime', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele, attrs) {
          var data, getRandomData, plot, totalPoints, update, updateInterval;
          data = [];
          totalPoints = 300;
          getRandomData = function() {
            var i, prev, res, y;
            if (data.length > 0) {
              data = data.slice(1);
            }
            while (data.length < totalPoints) {
              prev = (data.length > 0 ? data[data.length - 1] : 50);
              y = prev + Math.random() * 10 - 5;
              if (y < 0) {
                y = 0;
              } else {
                if (y > 100) {
                  y = 100;
                }
              }
              data.push(y);
            }
            res = [];
            i = 0;
            while (i < data.length) {
              res.push([i, data[i]]);
              ++i;
            }
            return res;
          };
          update = function() {
            plot.setData([getRandomData()]);
            plot.draw();
            setTimeout(update, updateInterval);
          };
          data = [];
          totalPoints = 300;
          updateInterval = 200;
          plot = $.plot(ele[0], [getRandomData()], {
            series: {
              lines: {
                show: true,
                fill: true
              },
              shadowSize: 0
            },
            yaxis: {
              min: 0,
              max: 100
            },
            xaxis: {
              show: false
            },
            grid: {
              hoverable: true,
              borderWidth: 1,
              borderColor: '#eeeeee'
            },
            colors: ["#5BC0C4"]
          });
          return update();
        }
      };
    }
  ]).directive('sparkline', [
    function() {
      return {
        restrict: 'A',
        scope: {
          data: '=',
          options: '='
        },
        link: function(scope, ele, attrs) {
          var data, options, sparkResize, sparklineDraw;
          data = scope.data;
          options = scope.options;
          sparkResize = void 0;
          sparklineDraw = function() {
            return ele.sparkline(data, options);
          };
          $(window).resize(function(e) {
            clearTimeout(sparkResize);
            return sparkResize = setTimeout(sparklineDraw, 200);
          });
          return sparklineDraw();
        }
      };
    }
  ]).directive('morrisChart', [
    function() {
      return {
        restrict: 'A',
        scope: {
          data: '='
        },
        link: function(scope, ele, attrs) {
          var colors, data, func, options;
          data = scope.data;
          switch (attrs.type) {
            case 'line':
              if (attrs.lineColors === void 0 || attrs.lineColors === '') {
                colors = null;
              } else {
                colors = JSON.parse(attrs.lineColors);
              }
              options = {
                element: ele[0],
                data: data,
                xkey: attrs.xkey,
                ykeys: JSON.parse(attrs.ykeys),
                labels: JSON.parse(attrs.labels),
                lineWidth: attrs.lineWidth || 2,
                lineColors: colors || ['#0b62a4', '#7a92a3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed'],
                resize: true
              };
              return new Morris.Line(options);
            case 'area':
              if (attrs.lineColors === void 0 || attrs.lineColors === '') {
                colors = null;
              } else {
                colors = JSON.parse(attrs.lineColors);
              }
              options = {
                element: ele[0],
                data: data,
                xkey: attrs.xkey,
                ykeys: JSON.parse(attrs.ykeys),
                labels: JSON.parse(attrs.labels),
                lineWidth: attrs.lineWidth || 2,
                lineColors: colors || ['#0b62a4', '#7a92a3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed'],
                behaveLikeLine: attrs.behaveLikeLine || false,
                fillOpacity: attrs.fillOpacity || 'auto',
                pointSize: attrs.pointSize || 4,
                resize: true
              };
              return new Morris.Area(options);
            case 'bar':
              if (attrs.barColors === void 0 || attrs.barColors === '') {
                colors = null;
              } else {
                colors = JSON.parse(attrs.barColors);
              }
              options = {
                element: ele[0],
                data: data,
                xkey: attrs.xkey,
                ykeys: JSON.parse(attrs.ykeys),
                labels: JSON.parse(attrs.labels),
                barColors: colors || ['#0b62a4', '#7a92a3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed'],
                stacked: attrs.stacked || null,
                resize: true
              };
              return new Morris.Bar(options);
            case 'donut':
              if (attrs.colors === void 0 || attrs.colors === '') {
                colors = null;
              } else {
                colors = JSON.parse(attrs.colors);
              }
              options = {
                element: ele[0],
                data: data,
                colors: colors || ['#0B62A4', '#3980B5', '#679DC6', '#95BBD7', '#B0CCE1', '#095791', '#095085', '#083E67', '#052C48', '#042135'],
                resize: true
              };
              if (attrs.formatter) {
                func = new Function('y', 'data', attrs.formatter);
                options.formatter = func;
              }
              return new Morris.Donut(options);
          }
        }
      };
    }
  ]);
})(); 


;
(function () {
  'use strict';
  angular.module('app.chart').controller('FlotChartCtrl', [
    '$scope', function($scope) {
      var areaChart, barChart;
      areaChart = {};
      areaChart.data1 = [[2007, 15], [2008, 20], [2009, 10], [2010, 5], [2011, 5], [2012, 20], [2013, 28]];
      areaChart.data2 = [[2007, 15], [2008, 16], [2009, 22], [2010, 14], [2011, 12], [2012, 19], [2013, 22]];
      $scope.area = {};
      $scope.area.data = [
        {
          data: areaChart.data1,
          label: "Value A",
          lines: {
            fill: true
          }
        }, {
          data: areaChart.data2,
          label: "Value B",
          points: {
            show: true
          },
          yaxis: 2
        }
      ];
      $scope.area.options = {
        series: {
          lines: {
            show: true,
            fill: false
          },
          points: {
            show: true,
            lineWidth: 2,
            fill: true,
            fillColor: "#ffffff",
            symbol: "circle",
            radius: 5
          },
          shadowSize: 0
        },
        grid: {
          hoverable: true,
          clickable: true,
          tickColor: "#f9f9f9",
          borderWidth: 1,
          borderColor: "#eeeeee"
        },
        colors: ["#23AE89", "#6A55C2"],
        tooltip: true,
        tooltipOpts: {
          defaultTheme: false
        },
        xaxis: {
          mode: "time"
        },
        yaxes: [
          {}, {
            position: "right"
          }
        ]
      };
      barChart = {};
      barChart.data1 = [[2008, 20], [2009, 10], [2010, 5], [2011, 5], [2012, 20], [2013, 28]];
      barChart.data2 = [[2008, 16], [2009, 22], [2010, 14], [2011, 12], [2012, 19], [2013, 22]];
      barChart.data3 = [[2008, 12], [2009, 30], [2010, 20], [2011, 19], [2012, 13], [2013, 20]];
      $scope.barChart = {};
      $scope.barChart.data = [
        {
          label: "Value A",
          data: barChart.data1
        }, {
          label: "Value B",
          data: barChart.data2
        }, {
          label: "Value C",
          data: barChart.data3
        }
      ];
      $scope.barChart.options = {
        series: {
          stack: true,
          bars: {
            show: true,
            fill: 1,
            barWidth: 0.3,
            align: "center",
            horizontal: false,
            order: 1
          }
        },
        grid: {
          hoverable: true,
          borderWidth: 1,
          borderColor: "#eeeeee"
        },
        tooltip: true,
        tooltipOpts: {
          defaultTheme: false
        },
        colors: ["#23AE89", "#2EC1CC", "#FFB61C", "#E94B3B"]
      };
      $scope.pieChart = {};
      $scope.pieChart.data = [
        {
          label: "Download Sales",
          data: 12
        }, {
          label: "In-Store Sales",
          data: 30
        }, {
          label: "Mail-Order Sales",
          data: 20
        }, {
          label: "Online Sales",
          data: 19
        }
      ];
      $scope.pieChart.options = {
        series: {
          pie: {
            show: true
          }
        },
        legend: {
          show: true
        },
        grid: {
          hoverable: true,
          clickable: true
        },
        colors: ["#23AE89", "#2EC1CC", "#FFB61C", "#E94B3B"],
        tooltip: true,
        tooltipOpts: {
          content: "%p.0%, %s",
          defaultTheme: false
        }
      };
      $scope.donutChart = {};
      $scope.donutChart.data = [
        {
          label: "Download Sales",
          data: 12
        }, {
          label: "In-Store Sales",
          data: 30
        }, {
          label: "Mail-Order Sales",
          data: 20
        }, {
          label: "Online Sales",
          data: 19
        }
      ];
      $scope.donutChart.options = {
        series: {
          pie: {
            show: true,
            innerRadius: 0.5
          }
        },
        legend: {
          show: true
        },
        grid: {
          hoverable: true,
          clickable: true
        },
        colors: ["#23AE89", "#2EC1CC", "#FFB61C", "#E94B3B"],
        tooltip: true,
        tooltipOpts: {
          content: "%p.0%, %s",
          defaultTheme: false
        }
      };
      $scope.donutChart2 = {};
      $scope.donutChart2.data = [
        {
          label: "Download Sales",
          data: 12
        }, {
          label: "In-Store Sales",
          data: 30
        }, {
          label: "Mail-Order Sales",
          data: 20
        }, {
          label: "Online Sales",
          data: 19
        }, {
          label: "Direct Sales",
          data: 15
        }
      ];
      return $scope.donutChart2.options = {
        series: {
          pie: {
            show: true,
            innerRadius: 0.45
          }
        },
        legend: {
          show: false
        },
        grid: {
          hoverable: true,
          clickable: true
        },
        colors: ["#176799", "#2F87B0", "#42A4BB", "#5BC0C4", "#78D6C7"],
        tooltip: true,
        tooltipOpts: {
          content: "%p.0%, %s",
          defaultTheme: false
        }
      };
    }
  ]).controller('FlotChartCtrlRealtime', ['$scope', function($scope) {}
  ]);
})(); 


;
(function () {
  'use strict';
  angular.module('app.chart').controller('MorrisChartCtrl', [
    '$scope', function($scope) {
      $scope.mainData = [
        {
          month: '2013-01',
          xbox: 294000,
          will: 136000,
          playstation: 244000
        }, {
          month: '2013-02',
          xbox: 228000,
          will: 335000,
          playstation: 127000
        }, {
          month: '2013-03',
          xbox: 199000,
          will: 159000,
          playstation: 130000
        }, {
          month: '2013-04',
          xbox: 174000,
          will: 160000,
          playstation: 82000
        }, {
          month: '2013-05',
          xbox: 255000,
          will: 318000,
          playstation: 82000
        }, {
          month: '2013-06',
          xbox: 298400,
          will: 401800,
          playstation: 98600
        }, {
          month: '2013-07',
          xbox: 370000,
          will: 225000,
          playstation: 159000
        }, {
          month: '2013-08',
          xbox: 376700,
          will: 303600,
          playstation: 130000
        }, {
          month: '2013-09',
          xbox: 527800,
          will: 301000,
          playstation: 119400
        }
      ];
      $scope.simpleData = [
        {
          year: '2008',
          value: 20
        }, {
          year: '2009',
          value: 10
        }, {
          year: '2010',
          value: 5
        }, {
          year: '2011',
          value: 5
        }, {
          year: '2012',
          value: 20
        }, {
          year: '2013',
          value: 19
        }
      ];
      $scope.comboData = [
        {
          year: '2008',
          a: 20,
          b: 16,
          c: 12
        }, {
          year: '2009',
          a: 10,
          b: 22,
          c: 30
        }, {
          year: '2010',
          a: 5,
          b: 14,
          c: 20
        }, {
          year: '2011',
          a: 5,
          b: 12,
          c: 19
        }, {
          year: '2012',
          a: 20,
          b: 19,
          c: 13
        }, {
          year: '2013',
          a: 28,
          b: 22,
          c: 20
        }
      ];
      $scope.donutData = [
        {
          label: "Download Sales",
          value: 12
        }, {
          label: "In-Store Sales",
          value: 30
        }, {
          label: "Mail-Order Sales",
          value: 20
        }, {
          label: "Online Sales",
          value: 19
        }
      ];
    }
  ]);
})(); 


;
(function () {
  'use strict';
  angular.module('app').controller('AppCtrl', [
    '$scope', '$location', '$rootScope', '$route', '$document', function($scope, $location, $rootScope, $route, $document) {
      $scope.isSpecificPage = function() {
        var path, ref, specificPages;
        path = $location.path();
        specificPages = ['/404', '/page/404', '/page/500', '/page/login', '/page/signin', '/page/signin1', '/page/signin2', '/page/signup', '/page/signup1', '/page/signup2', '/page/lock-screen'];
        return (ref = specificPages.indexOf(path) >= 0) != null ? ref : {
          1: -1
        };
      };
      $scope.main = {
        brand: 'Flatify',
        name: 'Lisa Doe'
      };
      return $rootScope.$on("$routeChangeSuccess", function(event, currentRoute, previousRoute) {
        return $document.scrollTo(0, 0);
      });
    }
  ]).controller('NavCtrl', ['$scope', 'filterFilter', function($scope, filterFilter) {}]).controller('DashboardCtrl', [
    '$scope', function($scope) {
      $scope.comboChartData = [['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'], ['2014/05', 165, 938, 522, 998, 450, 614.6], ['2014/06', 135, 1120, 599, 1268, 288, 682], ['2014/07', 157, 1167, 587, 807, 397, 623], ['2014/08', 139, 1110, 615, 968, 215, 609.4], ['2014/09', 136, 691, 629, 1026, 366, 569.6]];
      return $scope.salesData = [['Year', 'Sales', 'Expenses'], ['2010', 1000, 400], ['2011', 1170, 460], ['2012', 660, 1120], ['2013', 1030, 540]];
    }
  ]);
})(); 


;
(function () {
    'use strict';

    angular.module('app')
        .config(['$routeProvider', function($routeProvider) {
            var routes, setRoutes;

            routes = [
                'dashboard',
                'ui/typography', 'ui/buttons', 'ui/icons', 'ui/grids', 'ui/widgets', 'ui/components', 'ui/boxes', 'ui/timeline', 'ui/nested-lists', 'ui/pricing-tables', 'ui/maps',
                'table/static', 'table/dynamic', 'table/responsive',
                'form/elements', 'form/layouts', 'form/validation', 'form/wizard',
                'chart/charts', 'chart/flot', 'chart/morris',
                'page/404', 'page/500', 'page/blank', 'page/forgot-password', 'page/invoice', 'page/lock-screen', 'page/profile', 'page/invoice', 'page/signin', 'page/signup',
                'mail/compose', 'mail/inbox', 'mail/single',
                'app/tasks', 'app/calendar'
            ]

            setRoutes = function(route) {
                var config, url;
                url = '/' + route;
                config = {
                    templateUrl: 'app/' + route + '.html'
                };
                $routeProvider.when(url, config);
                return $routeProvider;
            };

            routes.forEach(function(route) {
                return setRoutes(route);
            });

            $routeProvider
                .when('/', {redirectTo: '/dashboard'})
                .when('/dashboard', {templateUrl: 'app/dashboard/dashboard.html'})
                .when('/404', {templateUrl: 'app/page/404.html'})
                .otherwise({ redirectTo: '/404'});

        }]
    );

})(); 
;
(function () {
  'use strict';
  angular.module('app.localization', []).factory('localize', [
    '$http', '$rootScope', '$window', function($http, $rootScope, $window) {
      var localize;
      localize = {
        language: '',
        url: void 0,
        resourceFileLoaded: false,
        successCallback: function(data) {
          localize.dictionary = data;
          localize.resourceFileLoaded = true;
          return $rootScope.$broadcast('localizeResourcesUpdated');
        },
        setLanguage: function(value) {
          localize.language = value.toLowerCase().split("-")[0];
          return localize.initLocalizedResources();
        },
        setUrl: function(value) {
          localize.url = value;
          return localize.initLocalizedResources();
        },
        buildUrl: function() {
          if (!localize.language) {
            localize.language = ($window.navigator.userLanguage || $window.navigator.language).toLowerCase();
            localize.language = localize.language.split("-")[0];
          }
          return 'i18n/resources-locale_' + localize.language + '.js';
        },
        initLocalizedResources: function() {
          var url;
          url = localize.url || localize.buildUrl();
          return $http({
            method: "GET",
            url: url,
            cache: false
          }).success(localize.successCallback).error(function() {
            return $rootScope.$broadcast('localizeResourcesUpdated');
          });
        },
        getLocalizedString: function(value) {
          var result, valueLowerCase;
          result = void 0;
          if (localize.dictionary && value) {
            valueLowerCase = value.toLowerCase();
            if (localize.dictionary[valueLowerCase] === '') {
              result = value;
            } else {
              result = localize.dictionary[valueLowerCase];
            }
          } else {
            result = value;
          }
          return result;
        }
      };
      return localize;
    }
  ]).directive('i18n', [
    'localize', function(localize) {
      var i18nDirective;
      i18nDirective = {
        restrict: "EA",
        updateText: function(ele, input, placeholder) {
          var result;
          result = void 0;
          if (input === 'i18n-placeholder') {
            result = localize.getLocalizedString(placeholder);
            return ele.attr('placeholder', result);
          } else if (input.length >= 1) {
            result = localize.getLocalizedString(input);
            return ele.text(result);
          }
        },
        link: function(scope, ele, attrs) {
          scope.$on('localizeResourcesUpdated', function() {
            return i18nDirective.updateText(ele, attrs.i18n, attrs.placeholder);
          });
          return attrs.$observe('i18n', function(value) {
            return i18nDirective.updateText(ele, value, attrs.placeholder);
          });
        }
      };
      return i18nDirective;
    }
  ]).controller('LangCtrl', [
    '$scope', 'localize', function($scope, localize) {
      $scope.lang = 'English';
      return $scope.setLang = function(lang) {
        switch (lang) {
          case 'English':
            localize.setLanguage('EN-US');
            break;
          case 'Español':
            localize.setLanguage('ES-ES');
            break;
          case '日本語':
            localize.setLanguage('JA-JP');
            break;
          case '中文':
            localize.setLanguage('ZH-TW');
            break;
          case 'Deutsch':
            localize.setLanguage('DE-DE');
            break;
          case 'français':
            localize.setLanguage('FR-FR');
            break;
          case 'Italiano':
            localize.setLanguage('IT-IT');
            break;
          case 'Portugal':
            localize.setLanguage('PT-BR');
            break;
          case 'Русский язык':
            localize.setLanguage('RU-RU');
            break;
          case '한국어':
            localize.setLanguage('KO-KR');
        }
        return $scope.lang = lang;
      };
    }
  ]);
})(); 


;
'use strict';
angular.module('app.ui.form').controller('DatepickerDemoCtrl', function ($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 2);
  $scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<$scope.events.length;i++){
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };
}).controller('TimepickerDemoCtrl', [
  '$scope', function($scope) {
    $scope.mytime = new Date();
    $scope.hstep = 1;
    $scope.mstep = 15;
    $scope.options = {
      hstep: [1, 2, 3],
      mstep: [1, 5, 10, 15, 25, 30]
    };
    $scope.ismeridian = true;
    $scope.toggleMode = function() {
      return $scope.ismeridian = !$scope.ismeridian;
    };
    $scope.update = function() {
      var d;
      d = new Date();
      d.setHours(14);
      d.setMinutes(0);
      return $scope.mytime = d;
    };
    $scope.changed = function() {
      return console.log('Time changed to: ' + $scope.mytime);
    };
    return $scope.clear = function() {
      return $scope.mytime = null;
    };
  }
]).controller('TypeaheadCtrl', [
  '$scope', function($scope) {
    $scope.selected = void 0;
    return $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  }
]).controller('RatingDemoCtrl', [
  '$scope', function($scope) {
    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;
    $scope.hoveringOver = function(value) {
      $scope.overStar = value;
      return $scope.percent = 100 * (value / $scope.max);
    };
    return $scope.ratingStates = [
      {
        stateOn: 'glyphicon-ok-sign',
        stateOff: 'glyphicon-ok-circle'
      }, {
        stateOn: 'glyphicon-star',
        stateOff: 'glyphicon-star-empty'
      }, {
        stateOn: 'glyphicon-heart',
        stateOff: 'glyphicon-ban-circle'
      }, {
        stateOn: 'glyphicon-heart'
      }, {
        stateOff: 'glyphicon-off'
      }
    ];
  }
]);


;
(function () {
  angular.module('app.ui.form').directive('uiRangeSlider', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele) {
          return ele.slider();
        }
      };
    }
  ]).directive('uiFileUpload', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele) {
          return ele.bootstrapFileInput();
        }
      };
    }
  ]).directive('uiSpinner', [
    function() {
      return {
        restrict: 'A',
        compile: function(ele, attrs) {
          ele.addClass('ui-spinner');
          return {
            post: function() {
              return ele.spinner();
            }
          };
        }
      };
    }
  ]).directive('uiWizardForm', [
    function() {
      return {
        link: function(scope, ele) {
          return ele.steps();
        }
      };
    }
  ]);
})(); 


;
(function () {
  'use strict';
  angular.module('app.ui.form').controller('wizardFormCtrl', [
    '$scope', function($scope) {
      $scope.wizard = {
        firstName: 'some name',
        lastName: '',
        email: '',
        password: '',
        age: '',
        address: ''
      };
      $scope.isValidateStep1 = function() {
        console.log($scope.wizard_step1);
        console.log($scope.wizard.firstName !== '');
        console.log($scope.wizard.lastName === '');
        return console.log($scope.wizard.firstName !== '' && $scope.wizard.lastName !== '');
      };
      return $scope.finishedWizard = function() {
        return console.log('yoo');
      };
    }
  ]).controller('formConstraintsCtrl', [
    '$scope', function($scope) {
      var original;
      $scope.form = {
        required: '',
        minlength: '',
        maxlength: '',
        length_rage: '',
        type_something: '',
        confirm_type: '',
        foo: '',
        email: '',
        url: '',
        num: '',
        minVal: '',
        maxVal: '',
        valRange: '',
        pattern: ''
      };
      original = angular.copy($scope.form);
      $scope.revert = function() {
        $scope.form = angular.copy(original);
        return $scope.form_constraints.$setPristine();
      };
      $scope.canRevert = function() {
        return !angular.equals($scope.form, original) || !$scope.form_constraints.$pristine;
      };
      return $scope.canSubmit = function() {
        return $scope.form_constraints.$valid && !angular.equals($scope.form, original);
      };
    }
  ]).controller('signinCtrl', [
    '$scope', function($scope) {
      var original;
      $scope.user = {
        email: '',
        password: ''
      };
      $scope.showInfoOnSubmit = false;
      original = angular.copy($scope.user);
      $scope.revert = function() {
        $scope.user = angular.copy(original);
        return $scope.form_signin.$setPristine();
      };
      $scope.canRevert = function() {
        return !angular.equals($scope.user, original) || !$scope.form_signin.$pristine;
      };
      $scope.canSubmit = function() {
        return $scope.form_signin.$valid && !angular.equals($scope.user, original);
      };
      return $scope.submitForm = function() {
        $scope.showInfoOnSubmit = true;
        return $scope.revert();
      };
    }
  ]).controller('signupCtrl', [
    '$scope', function($scope) {
      var original;
      $scope.user = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        age: ''
      };
      $scope.showInfoOnSubmit = false;
      original = angular.copy($scope.user);
      $scope.revert = function() {
        $scope.user = angular.copy(original);
        $scope.form_signup.$setPristine();
        return $scope.form_signup.confirmPassword.$setPristine();
      };
      $scope.canRevert = function() {
        return !angular.equals($scope.user, original) || !$scope.form_signup.$pristine;
      };
      $scope.canSubmit = function() {
        return $scope.form_signup.$valid && !angular.equals($scope.user, original);
      };
      return $scope.submitForm = function() {
        $scope.showInfoOnSubmit = true;
        return $scope.revert();
      };
    }
  ]).directive('validateEquals', [
    function() {
      return {
        require: 'ngModel',
        link: function(scope, ele, attrs, ngModelCtrl) {
          var validateEqual;
          validateEqual = function(value) {
            var valid;
            valid = value === scope.$eval(attrs.validateEquals);
            ngModelCtrl.$setValidity('equal', valid);
            return typeof valid === "function" ? valid({
              value: void 0
            }) : void 0;
          };
          ngModelCtrl.$parsers.push(validateEqual);
          ngModelCtrl.$formatters.push(validateEqual);
          return scope.$watch(attrs.validateEquals, function(newValue, oldValue) {
            if (newValue !== oldValue) {
              return ngModelCtrl.$setViewValue(ngModelCtrl.$ViewValue);
            }
          });
        }
      };
    }
  ]);

})(); 

;
(function () {
  angular.module('app.layout').directive('imgHolder', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele, attrs) {
          return Holder.run({
            images: ele[0]
          });
        }
      };
    }
  ]).directive('customBackground', function() {
    return {
      restrict: "A",
      controller: [
        '$scope', '$element', '$location', function($scope, $element, $location) {
          var addBg, path;
          path = function() {
            return $location.path();
          };
          addBg = function(path) {
            $element.removeClass('body-home body-special body-tasks body-lock');
            switch (path) {
              case '/':
                return $element.addClass('body-home');
              case '/404':
              case '/page/404':
              case '/page/500':
              case '/page/signin':
              case '/page/signup':
                return $element.addClass('body-special');
              case '/page/lock-screen':
                return $element.addClass('body-special body-lock');
              case '/tasks':
                return $element.addClass('body-tasks');
            }
          };
          addBg($location.path());
          return $scope.$watch(path, function(newVal, oldVal) {
            if (newVal === oldVal) {
              return;
            }
            return addBg($location.path());
          });
        }
      ]
    };
  }).directive('uiColorSwitch', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele, attrs) {
          return ele.find('.color-option').on('click', function(event) {
            var $this, hrefUrl, style;
            $this = $(this);
            hrefUrl = void 0;
            style = $this.data('style');
            if (style === 'loulou') {
              hrefUrl = 'styles/main.css';
              $('link[href^="styles/main"]').attr('href', hrefUrl);
            } else if (style) {
              style = '-' + style;
              hrefUrl = 'styles/main' + style + '.css';
              $('link[href^="styles/main"]').attr('href', hrefUrl);
            } else {
              return false;
            }
            return event.preventDefault();
          });
        }
      };
    }
  ]).directive('toggleMinNav', [
    '$rootScope', function($rootScope) {
      return {
        restrict: 'A',
        link: function(scope, ele, attrs) {
          var $window, Timer, app, updateClass;
          app = $('#app');
          $window = $(window);
          ele.on('click', function(e) {
            if (app.hasClass('nav-min')) {
              app.removeClass('nav-min');
            } else {
              app.addClass('nav-min');
              $rootScope.$broadcast('minNav:enabled');
            }
            return e.preventDefault();
          });
          Timer = void 0;
          updateClass = function() {
            var width;
            width = $window.width();
            if (width < 768) {
              return app.removeClass('nav-min');
            }
          };
          return $window.resize(function() {
            var t;
            clearTimeout(t);
            return t = setTimeout(updateClass, 300);
          });
        }
      };
    }
  ]).directive('collapseNav', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele, attrs) {
          var $a, $aRest, $lists, $listsRest, app;
          $lists = ele.find('ul').parent('li');
          $lists.append('<i class="fa fa-caret-right icon-has-ul"></i>');
          $a = $lists.children('a');
          $listsRest = ele.children('li').not($lists);
          $aRest = $listsRest.children('a');
          app = $('#app');
          $a.on('click', function(event) {
            var $parent, $this;
            if (app.hasClass('nav-min')) {
              return false;
            }
            $this = $(this);
            $parent = $this.parent('li');
            $lists.not($parent).removeClass('open').find('ul').slideUp();
            $parent.toggleClass('open').find('ul').slideToggle();
            return event.preventDefault();
          });
          $aRest.on('click', function(event) {
            return $lists.removeClass('open').find('ul').slideUp();
          });
          return scope.$on('minNav:enabled', function(event) {
            return $lists.removeClass('open').find('ul').slideUp();
          });
        }
      };
    }
  ]).directive('highlightActive', [
    function() {
      return {
        restrict: "A",
        controller: [
          '$scope', '$element', '$attrs', '$location', function($scope, $element, $attrs, $location) {
            var highlightActive, links, path;
            links = $element.find('a');
            path = function() {
              return $location.path();
            };
            highlightActive = function(links, path) {
              path = '#' + path;
              return angular.forEach(links, function(link) {
                var $li, $link, href;
                $link = angular.element(link);
                $li = $link.parent('li');
                href = $link.attr('href');
                if ($li.hasClass('active')) {
                  $li.removeClass('active');
                }
                if (path.indexOf(href) === 0) {
                  return $li.addClass('active');
                }
              });
            };
            highlightActive(links, $location.path());
            return $scope.$watch(path, function(newVal, oldVal) {
              if (newVal === oldVal) {
                return;
              }
              return highlightActive(links, $location.path());
            });
          }
        ]
      };
    }
  ]).directive('toggleOffCanvas', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele, attrs) {
          return ele.on('click', function() {
            return $('#app').toggleClass('on-canvas');
          });
        }
      };
    }
  ]).directive('slimScroll', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele, attrs) {
          return ele.slimScroll({
            height: '100%'
          });
        }
      };
    }
  ]).directive('goBack', [
    function() {
      return {
        restrict: "A",
        controller: [
          '$scope', '$element', '$window', function($scope, $element, $window) {
            return $element.on('click', function() {
              return $window.history.back();
            });
          }
        ]
      };
    }
  ]);
})(); 


;
(function () {
  'use strict';
  angular.module('app.table').controller('TableCtrl', [
    '$scope', '$filter', function($scope, $filter) {
      var init;
      $scope.stores = [
        {
          name: 'Nijiya Market',
          price: '$$',
          sales: 292,
          rating: 4.0
        }, {
          name: 'Eat On Monday Truck',
          price: '$',
          sales: 119,
          rating: 4.3
        }, {
          name: 'Tea Era',
          price: '$',
          sales: 874,
          rating: 4.0
        }, {
          name: 'Rogers Deli',
          price: '$',
          sales: 347,
          rating: 4.2
        }, {
          name: 'MoBowl',
          price: '$$$',
          sales: 24,
          rating: 4.6
        }, {
          name: 'The Milk Pail Market',
          price: '$',
          sales: 543,
          rating: 4.5
        }, {
          name: 'Nob Hill Foods',
          price: '$$',
          sales: 874,
          rating: 4.0
        }, {
          name: 'Scratch',
          price: '$$$',
          sales: 643,
          rating: 3.6
        }, {
          name: 'Gochi Japanese Fusion Tapas',
          price: '$$$',
          sales: 56,
          rating: 4.1
        }, {
          name: 'Cost Plus World Market',
          price: '$$',
          sales: 79,
          rating: 4.0
        }, {
          name: 'Bumble Bee Health Foods',
          price: '$$',
          sales: 43,
          rating: 4.3
        }, {
          name: 'Costco',
          price: '$$',
          sales: 219,
          rating: 3.6
        }, {
          name: 'Red Rock Coffee Co',
          price: '$',
          sales: 765,
          rating: 4.1
        }, {
          name: '99 Ranch Market',
          price: '$',
          sales: 181,
          rating: 3.4
        }, {
          name: 'Mi Pueblo Food Center',
          price: '$',
          sales: 78,
          rating: 4.0
        }, {
          name: 'Cucina Venti',
          price: '$$',
          sales: 163,
          rating: 3.3
        }, {
          name: 'Sufi Coffee Shop',
          price: '$',
          sales: 113,
          rating: 3.3
        }, {
          name: 'Dana Street Roasting',
          price: '$',
          sales: 316,
          rating: 4.1
        }, {
          name: 'Pearl Cafe',
          price: '$',
          sales: 173,
          rating: 3.4
        }, {
          name: 'Posh Bagel',
          price: '$',
          sales: 140,
          rating: 4.0
        }, {
          name: 'Artisan Wine Depot',
          price: '$$',
          sales: 26,
          rating: 4.1
        }, {
          name: 'Hong Kong Chinese Bakery',
          price: '$',
          sales: 182,
          rating: 3.4
        }, {
          name: 'Starbucks',
          price: '$$',
          sales: 97,
          rating: 3.7
        }, {
          name: 'Tapioca Express',
          price: '$',
          sales: 301,
          rating: 3.0
        }, {
          name: 'House of Bagels',
          price: '$',
          sales: 82,
          rating: 4.4
        }
      ];
      $scope.searchKeywords = '';
      $scope.filteredStores = [];
      $scope.row = '';
      $scope.select = function(page) {
        var end, start;
        start = (page - 1) * $scope.numPerPage;
        end = start + $scope.numPerPage;
        return $scope.currentPageStores = $scope.filteredStores.slice(start, end);
      };
      $scope.onFilterChange = function() {
        $scope.select(1);
        $scope.currentPage = 1;
        return $scope.row = '';
      };
      $scope.onNumPerPageChange = function() {
        $scope.select(1);
        return $scope.currentPage = 1;
      };
      $scope.onOrderChange = function() {
        $scope.select(1);
        return $scope.currentPage = 1;
      };
      $scope.search = function() {
        $scope.filteredStores = $filter('filter')($scope.stores, $scope.searchKeywords);
        return $scope.onFilterChange();
      };
      $scope.order = function(rowName) {
        if ($scope.row === rowName) {
          return;
        }
        $scope.row = rowName;
        $scope.filteredStores = $filter('orderBy')($scope.stores, rowName);
        return $scope.onOrderChange();
      };
      $scope.numPerPageOpt = [3, 5, 10, 20];
      $scope.numPerPage = $scope.numPerPageOpt[2];
      $scope.currentPage = 1;
      $scope.currentPageStores = [];
      init = function() {
        $scope.search();
        return $scope.select($scope.currentPage);
      };
      return init();
    }
  ]);
})(); 


;
(function () {
  'use strict';
  angular.module('app.ui').controller('LoaderCtrl', [
    '$scope', 'cfpLoadingBar', function($scope, cfpLoadingBar) {
      $scope.start = function() {
        return cfpLoadingBar.start();
      };
      $scope.inc = function() {
        return cfpLoadingBar.inc();
      };
      $scope.set = function() {
        return cfpLoadingBar.set(0.3);
      };
      return $scope.complete = function() {
        return cfpLoadingBar.complete();
      };
    }
  ]).controller('NotifyCtrl', [
    '$scope', 'logger', function($scope, logger) {
      return $scope.notify = function(type) {
        switch (type) {
          case 'info':
            return logger.log("Heads up! This alert needs your attention, but it's not super important.");
          case 'success':
            return logger.logSuccess("Well done! You successfully read this important alert message.");
          case 'warning':
            return logger.logWarning("Warning! Best check yo self, you're not looking too good.");
          case 'error':
            return logger.logError("Oh snap! Change a few things up and try submitting again.");
        }
      };
    }
  ]).controller('AlertDemoCtrl', [
    '$scope', function($scope) {
      $scope.alerts = [
        {
          type: 'success',
          msg: 'Well done! You successfully read this important alert message.'
        }, {
          type: 'info',
          msg: 'Heads up! This alert needs your attention, but it is not super important.'
        }, {
          type: 'warning',
          msg: "Warning! Best check yo self, you're not looking too good."
        }, {
          type: 'danger',
          msg: 'Oh snap! Change a few things up and try submitting again.'
        }
      ];
      $scope.addAlert = function() {
        var num, type;
        num = Math.ceil(Math.random() * 4);
        type = void 0;
        switch (num) {
          case 0:
            type = 'info';
            break;
          case 1:
            type = 'success';
            break;
          case 2:
            type = 'info';
            break;
          case 3:
            type = 'warning';
            break;
          case 4:
            type = 'danger';
        }
        return $scope.alerts.push({
          type: type,
          msg: "Another alert!"
        });
      };
      return $scope.closeAlert = function(index) {
        return $scope.alerts.splice(index, 1);
      };
    }
  ]).controller('ProgressDemoCtrl', [
    '$scope', function($scope) {
      $scope.max = 200;
      $scope.random = function() {
        var type, value;
        value = Math.floor((Math.random() * 100) + 10);
        type = void 0;
        if (value < 25) {
          type = "success";
        } else if (value < 50) {
          type = "info";
        } else if (value < 75) {
          type = "warning";
        } else {
          type = "danger";
        }
        $scope.showWarning = type === "danger" || type === "warning";
        $scope.dynamic = value;
        $scope.type = type;
      };
      return $scope.random();
    }
  ]).controller('AccordionDemoCtrl', [
    '$scope', function($scope) {
      $scope.oneAtATime = true;
      $scope.groups = [
        {
          title: "Dynamic Group Header - 1",
          content: "Dynamic Group Body - 1"
        }, {
          title: "Dynamic Group Header - 2",
          content: "Dynamic Group Body - 2"
        }, {
          title: "Dynamic Group Header - 3",
          content: "Dynamic Group Body - 3"
        }
      ];
      $scope.items = ["Item 1", "Item 2", "Item 3"];
      $scope.addItem = function() {
        var newItemNo;
        newItemNo = $scope.items.length + 1;
        $scope.items.push("Item " + newItemNo);
      };
    }
  ]).controller('CollapseDemoCtrl', [
    '$scope', function($scope) {
      return $scope.isCollapsed = false;
    }
  ]).controller('ModalDemoCtrl', [
    '$scope', '$modal', '$log', function($scope, $modal, $log) {
      $scope.items = ["item1", "item2", "item3"];
      $scope.open = function() {
        var modalInstance;
        modalInstance = $modal.open({
          templateUrl: "myModalContent.html",
          controller: 'ModalInstanceCtrl',
          resolve: {
            items: function() {
              return $scope.items;
            }
          }
        });
        modalInstance.result.then((function(selectedItem) {
          $scope.selected = selectedItem;
        }), function() {
          $log.info("Modal dismissed at: " + new Date());
        });
      };
    }
  ]).controller('ModalInstanceCtrl', [
    '$scope', '$modalInstance', 'items', function($scope, $modalInstance, items) {
      $scope.items = items;
      $scope.selected = {
        item: $scope.items[0]
      };
      $scope.ok = function() {
        $modalInstance.close($scope.selected.item);
      };
      $scope.cancel = function() {
        $modalInstance.dismiss("cancel");
      };
    }
  ]).controller('PaginationDemoCtrl', [
    '$scope', function($scope) {
      $scope.totalItems = 64;
      $scope.currentPage = 4;
      $scope.maxSize = 5;
      $scope.setPage = function(pageNo) {
        return $scope.currentPage = pageNo;
      };
      $scope.bigTotalItems = 175;
      return $scope.bigCurrentPage = 1;
    }
  ]).controller('TabsDemoCtrl', [
    '$scope', function($scope) {
      $scope.tabs = [
        {
          title: "Dynamic Title 1",
          content: "Dynamic content 1.  Consectetur adipisicing elit. Nihil, quidem, officiis, et ex laudantium sed cupiditate voluptatum libero nobis sit illum voluptates beatae ab. Ad, repellendus non sequi et at."
        }, {
          title: "Disabled",
          content: "Dynamic content 2.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, quidem, officiis, et ex laudantium sed cupiditate voluptatum libero nobis sit illum voluptates beatae ab. Ad, repellendus non sequi et at.",
          disabled: true
        }
      ];
      return $scope.navType = "pills";
    }
  ]);
})(); 


;
(function () {
  'use strict';
  angular.module('app.ui').directive('uiTime', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele) {
          var checkTime, startTime;
          startTime = function() {
            var h, m, s, t, time, today;
            today = new Date();
            h = today.getHours();
            m = today.getMinutes();
            s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            time = h + ":" + m + ":" + s;
            ele.html(time);
            return t = setTimeout(startTime, 500);
          };
          checkTime = function(i) {
            if (i < 10) {
              i = "0" + i;
            }
            return i;
          };
          return startTime();
        }
      };
    }
  ]).directive('uiWeather', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele, attrs) {
          var color, icon, skycons;
          color = attrs.color;
          icon = Skycons[attrs.icon];
          skycons = new Skycons({
            "color": color,
            "resizeClear": true
          });
          skycons.add(ele[0], icon);
          return skycons.play();
        }
      };
    }
  ]);
})(); 


;
(function () {
  'use strict';
  angular.module('app.ui').factory('logger', [
    function() {
      var logIt;
      toastr.options = {
        "closeButton": true,
        "positionClass": "toast-bottom-right",
        "timeOut": "3000"
      };
      logIt = function(message, type) {
        return toastr[type](message);
      };
      return {
        log: function(message) {
          logIt(message, 'info');
        },
        logWarning: function(message) {
          logIt(message, 'warning');
        },
        logSuccess: function(message) {
          logIt(message, 'success');
        },
        logError: function(message) {
          logIt(message, 'error');
        }
      };
    }
  ]);
})(); 

