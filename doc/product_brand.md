# Product Brand API Spec

## Create Product Brand

Endpoint : POST /api/productbrand

Request Body :

```json
{
  "brand_name": "string",
  "brand_email": "string",
  "brand_address": "string",
  "brand_country": "string",
  "createdby": "string",
  "createddate": "string"
}
```

Response Body (Success) :

```json
{
  "brand_name": "string",
  "brand_email": "string",
  "brand_address": "string",
  "brand_country": "string",
  "createdby": "string",
  "createddate": "string"
}
```

Endpoint : GET /api/productbrand

Response Body (Success) :

```json
[
  {
    "_id": "66aa4691dee6e1ed1e114dae",
    "brand_name": "string",
    "brand_email": "string",
    "brand_address": "string",
    "brand_country": "string",
    "createdby": "string",
    "createddate": "string",
    "__v": 0
  }
]
```
