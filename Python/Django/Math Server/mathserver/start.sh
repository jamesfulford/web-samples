#!/bin/bash

# Start Gunicorn processes
echo Starting Gunicorn.
exec gunicorn mathserver.wsgi:application \
    --bind $IP:$PORT \
    --workers 3