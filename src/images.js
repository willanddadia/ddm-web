function importAll(r) {
    return r.keys().map(r);
}
  
export default  importAll(require.context('./assets/images/banners', false, /\.(png|jpe?g|svg)$/));
