// class Cart {
//     constructor(user) {
//         this.user = user;
//         this.store = {}
//     }
//     put (id, project) {
//         this.store[id] = product;
//     }
//     get (id) {
//         return this.store[id];
//     }
// }

// const cartJohn = new Cart({name: 'john'})
// const cartJay = new Cart({name: 'jay'})

// ############################################
//  타입스크립트로 변경
// 접근 제안자 -> private(상속 접근x b), pulic(디폴트), protected(상속 접근o)

interface User {
    name: string;
}

interface Product {
    id: string;
    price: number;
}

class Cart {
    // protected user: User;
    // private store: object;

    constructor(protected user: User, private store: object = {}) {
        this.user = user;
        this.store = {};
    }
    public put(id: string, product: Product) {
        // this.user.name;
        this.store[id] = product;
    }
    get(id: string) {
        return this.store[id];
    }
}

class PromotionCart extends Cart {
    addPromotion() {
        this.user; // protected
    }
}
const cart2 = new PromotionCart({ name: "john" });
cart2.addPromotion();
const cartJohn = new Cart({ name: "john" });
const cartJay = new Cart({ name: "jay" });
