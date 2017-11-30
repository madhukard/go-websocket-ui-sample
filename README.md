# Go Sensor Readings


# Running In Mac OS

    ./macExecutable

# Running in Linux ARM

    ./armExecutable
    

Then point your browser to http://localhost:8000


# Sending data via CURL to see changes in browser

```
curl -X POST http://localhost:8000/sendingPipeline -H 'Content-Type: application/json;charset=UTF-8' --data-binary '{"temperature_C": "12.34", "pressure_KPa": "567.89", "humidity": "534.44"}'
```


# Building App after making changes

```
go get github.com/gorilla/websocket
go run main.go
```

# Building for Mac OS

    go build -o macExecutable main.go
 
# Building for Linux ARM
 
    env GOOS=linux GOARCH=arm go build go build -o armExecutable main.go
