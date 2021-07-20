# Spot Panel

![img.png](https://github.com/IntegrationMatters/integrationmatters-spot-panel/blob/master/spot-template.png?raw=true)

The Spot panel displays a single total with a trend compared to the same time range before. \
When the current time range is for example from `now-5m` to `now`, the previous time range
(the one to compare with) should be `now-10m` to `now-5m`. To achieve this easily, use
the `${__range}` variable for current and `offset ${__range}` for previous values as seen
in the table below.

## Required queries and query names

Query name | query
--- | ---
**total** | increase(application_flows_state_total{status="success"}[${__range}])
**previous** | increase(application_flows_state_total{status="success"}[${__range}] offset ${__range})

**The query names are mandatory.**
