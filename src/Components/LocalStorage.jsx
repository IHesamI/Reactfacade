export default function useLocalStorage() {

    function drop() {
        localStorage.clear();
    }

    function remove(item) {
        localStorage.removeItem(item);
    }

    function add(key, value) {
        return localStorage.setItem(key, value);
    }

    function get(key) {
        const item = localStorage.getItem(key)
        return item ? item : { error: 'No item found!' };
    }

    function set(key, item) {
        try {
            localStorage.setItem(key, item);
        }
        catch (error) {
            return error;
        }
    }
    return [drop, remove, add, get, set];
}
