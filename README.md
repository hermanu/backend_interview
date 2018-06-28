# Express test

The main goal of this test is to create an Express backend service that will have an available
endpoint at ``/game-list`` waiting for a POST message with the following JSON:

``` 
{
  "items":[
    {
      "label":"Top Games",
      "games":[
        {
          "name":"Game 1",
          "tag":"Top"
        },
        {
          "name":"Game 2",
          "tag":"Top"
        }
      ]
    },
    {
      "label":"New Games",
      "games":[
        {
          "name":"Game 3",
          "tag":"New"
        }
      ]
    }
  ],
  "games":[
    {
      "name":"Game 1",
      "customProp1":"a",
      "customProp2":"b"
    },
    {
      "name":"Game 2",
      "customProp1":"a",
      "customProp2":"b"
    },
    {
      "name":"Game 3",
      "customProp1":"a",
      "customProp2":"Life is Beautiful"
    }
  ]
}
```

Once the POST message has been received, the expected returned response should follow the transform pattern below:

``` 
{
  "categories":[
    {
      "label":"Top Games",
      "games":[
        {
          "name":"Game 1",
          "customProp1":"a",
          "customProp2":"b",
          "tag":"Top"
        },
        {
          "name":"Game 2",
          "customProp1":"a",
          "customProp2":"b",
          "tag":"Top"
        }
      ]
    },
    {
      "label":"New Games",
      "games":[
        {
          "name":"Game 3",
          "customProp1":"a",
          "customProp2":"life-is-beautiful"
        }
      ]
    }
  ]
}
```

## Transformation pattern considerations:

* The expected result should manipulate the POST message to obtain a list of categories that include
the related games also in a list.

* Bear in mind that customProp inside games, should be transformed to only allow letters (lowercase),
numbers or hyphens "-" substituting original spaces.

* The length of the original game or categories list could be really big, so consider all possible code optimizations.



## Test considerations:

* You are allowed to use any boilerplate for Express in order to get the test ready as quick as possible.
* Having a Docker container of the service would be a big plus.
