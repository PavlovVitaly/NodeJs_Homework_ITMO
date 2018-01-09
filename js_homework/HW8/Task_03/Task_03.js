TrafficLight = {
    avalibleLights: ["red", "yellow", "green"],
    defaultLight: "black",
    currentLightIndex: 0,
    directionOfLightsSwitching: -1,
    CreateTrafficLight: function (id) {
        var element = document.getElementById(id);
        var bodyOfTrafficLight = document.createElement("div");
        bodyOfTrafficLight.style.position = "absolute";
        bodyOfTrafficLight.style.top = "10%";
        bodyOfTrafficLight.style.left = "50%";
        bodyOfTrafficLight.style.border = "1px solid black";
        bodyOfTrafficLight.style.background = "blue";

        var CreateLight = function (light) {
            light.style.width = "100px";
            light.style.height = "100px";
            light.style.background = "black";
            light.style.border = "1px solid #939393";
            light.style.borderRadius = "50px";
        };

        var redLight = document.createElement("div");
        redLight.setAttribute("id", "red");
        CreateLight(redLight);

        var yellowLight = document.createElement("div");
        yellowLight.setAttribute("id", "yellow");
        CreateLight(yellowLight);

        var greenLight = document.createElement("div");
        greenLight.setAttribute("id", "green");
        CreateLight(greenLight);

        bodyOfTrafficLight.appendChild(redLight);
        bodyOfTrafficLight.appendChild(yellowLight);
        bodyOfTrafficLight.appendChild(greenLight);
        element.appendChild(bodyOfTrafficLight);
    },
    SwitchLight: function () {
        var element = document.getElementById(this.TrafficLight.avalibleLights[this.TrafficLight.currentLightIndex]);
        element.style.background = this.TrafficLight.defaultLight;
        if ((this.TrafficLight.currentLightIndex <= 0) || (this.TrafficLight.currentLightIndex >= 2)) {
            this.TrafficLight.directionOfLightsSwitching *= -1;
        }
        this.TrafficLight.currentLightIndex += this.TrafficLight.directionOfLightsSwitching;
        var element = document.getElementById(this.TrafficLight.avalibleLights[this.TrafficLight.currentLightIndex]);
        element.style.background = this.TrafficLight.avalibleLights[this.TrafficLight.currentLightIndex];
    }
};