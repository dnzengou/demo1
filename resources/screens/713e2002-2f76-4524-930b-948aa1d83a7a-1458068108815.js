jQuery("#simulation")
  .on("click", ".s-713e2002-2f76-4524-930b-948aa1d83a7a .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_9",
                    "value": {
                      "action": "jimMultiply",
                      "parameter": [ {
                        "action": "jimDivide",
                        "parameter": [ {
                          "action": "jimPlus",
                          "parameter": [ {
                            "action": "jimAvg",
                            "parameter": [ {
                              "datatype": "property",
                              "target": "#s-Input_4",
                              "property": "jimGetValue"
                            },null ]
                          },{
                            "action": "jimAvg",
                            "parameter": [ {
                              "datatype": "property",
                              "target": "#s-Input_6",
                              "property": "jimGetValue"
                            },null ]
                          } ]
                        },null ]
                      },{
                        "action": "jimMultiply",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_2",
                          "property": "jimGetValue"
                        },{
                          "datatype": "property",
                          "target": "#s-Input_2",
                          "property": "jimGetValue"
                        } ]
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "Flashman",
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_9",
                    "value": {
                      "action": "jimMultiply",
                      "parameter": [ {
                        "action": "jimDivide",
                        "parameter": [ {
                          "action": "jimPlus",
                          "parameter": [ {
                            "action": "jimPlus",
                            "parameter": [ {
                              "action": "jimPlus",
                              "parameter": [ {
                                "datatype": "property",
                                "target": "#s-Input_4",
                                "property": "jimGetValue"
                              },{
                                "datatype": "property",
                                "target": "#s-Input_5",
                                "property": "jimGetValue"
                              } ]
                            },{
                              "datatype": "property",
                              "target": "#s-Input_6",
                              "property": "jimGetValue"
                            } ]
                          },{
                            "datatype": "property",
                            "target": "#s-Input_7",
                            "property": "jimGetValue"
                          } ]
                        },{
                          "datatype": "property",
                          "target": "#s-Input_3",
                          "property": "jimGetValue"
                        } ]
                      },{
                        "action": "jimMultiply",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_2",
                          "property": "jimGetValue"
                        },{
                          "datatype": "property",
                          "target": "#s-Input_2",
                          "property": "jimGetValue"
                        } ]
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_10",
                    "value": "Flasman"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_306")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/77a594c9-ff0c-44f5-9f35-f5ec4c638d3b"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_290")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/77a594c9-ff0c-44f5-9f35-f5ec4c638d3b",
                    "transition": "fade"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("change", ".s-713e2002-2f76-4524-930b-948aa1d83a7a .change", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "Flashman",
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });