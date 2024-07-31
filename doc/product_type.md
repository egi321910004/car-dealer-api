# Product Type API Spec

## Create Product Type

Endpoint : POST /api/producttype

Request Body :

```json
{
  "product_type_name": "R4",
  "createdby": "System",
  "createddate": "23-11-1991"
}
```

Response Body (Success) :

```json
{
  "product_type_name": "R4",
  "createdby": "system",
  "createddate": "31-07-2024"
}
```

Endpoint : GET /api/producttype

Request Body :

Response Body (Success) :

```json
[
  {
    "_id": "66aa4691dee6e1ed1e114dae",
    "product_type_name": "R4",
    "createdby": "system",
    "createddate": "31-07-2024",
    "__v": 0
  }
]
```
