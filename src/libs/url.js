import qs from 'qs';

class Url {
  constructor(url) {
    this.el = document.createElement('a');
    this.el.href = url;
    this.source = url;
    this.protocol = this.el.protocol.replace(':', '');
    this.host = this.el.hostname;
    this.port = this.el.port || '80';
    this.search = this.el.search;
    this.hash = this.el.hash.replace('#', '');
    this.path = this.el.pathname.replace(/^([^/])/, '/$1');
    this.segments = this.el.pathname.replace(/^\//, '').split('/');
    this.query = qs.parse(this.search);
  }
}

export const parse = qs.parse;
export const stringify = qs.stringify;
export default Url;
