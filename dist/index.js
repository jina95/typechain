"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesissBlock = new Block(0, "2020", "", "hello", 123456);
let blockchain = [genesissBlock];
console.log(blockchain);
// type script rule
//# sourceMappingURL=index.js.map