export default class Debug {
    public static readonly div = document.getElementById("debug") as HTMLDivElement;
    public static debugList: Map<string, any> = new Map();

    public static set(key: string, value: any) {
        this.debugList.set(key, value);
        this.update();
    }

    public static update() {
        this.div.innerHTML = "";
        this.debugList.forEach((value, key) => {
            const p = document.createElement("p");

            switch (typeof value) {
                case "object":
                    p.innerHTML = `${key}: ${JSON.stringify(value)}`;
                    break;
                case "number":
                    p.innerHTML = `${key}: ${value.toFixed(2)}`;
                    break;
                default:
                    p.innerHTML = `${key}: ${value}`;
                    break;
            }

            this.div.appendChild(p);
        })
    }
}