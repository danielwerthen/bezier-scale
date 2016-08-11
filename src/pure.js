import _ from 'lodash';
import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

function isRequiredUpdateObject(o) {
  return Array.isArray(o) || (o && o.constructor === Object.prototype.constructor);
}

function deepDiff(o1, o2, p, log) {
  const notify = (status) => {
    log.warn('Update %s', status);
    log.log('%cbefore', 'font-weight: bold', o1);
    log.log('%cafter ', 'font-weight: bold', o2);
  };
  if (!_.isEqual(o1, o2)) {
    log.group(p);
    if ([o1, o2].every(_.isFunction)) {
      notify('avoidable?');
    } else if (![o1, o2].every(isRequiredUpdateObject)) {
      notify('required.');
    } else {
      const keys = _.union(_.keys(o1), _.keys(o2));
      for (const key of keys) {
        deepDiff(o1[key], o2[key], key, log);
      }
    }
    log.groupEnd();
  } else if (o1 !== o2) {
    log.group(p);
    notify('avoidable!');
    if (_.isObject(o1) && _.isObject(o2)) {
      const keys = _.union(_.keys(o1), _.keys(o2));
      for (const key of keys) {
        deepDiff(o1[key], o2[key], key, log);
      }
    }
    log.groupEnd();
  }
}

export default function pureRender(Component, diff) {
  class ExtendedComponent extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
      return shallowCompare(this, nextProps, nextState);
    }

    componentDidUpdate = diff &&
      process.env.NODE_ENV !== 'production' &&
      ((prevProps) => {
        deepDiff(prevProps, this.props, this.constructor.displayName, console);
      })

    render() {
      return <Component {...this.props} />;
    }
  }
  const dn = Component.displayName || Component.name || 'Component';
  ExtendedComponent.displayName = `pure(${dn})`;
  return ExtendedComponent;
}
