module.exports = function (s, vars) {
  return s.replace(/(\\?)(\$([a-z0-9]+)|\${([a-z0-9]+)})/ig, function (_, escape, varExpression, variable, bracedVariable) {
    if (!escape) {
      return vars[variable || bracedVariable] || '';
    } else {
      return varExpression;
    }
  });
};
