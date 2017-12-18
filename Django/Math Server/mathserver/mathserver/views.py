from django.http import HttpResponse
import time

def identity(req):
    val = float(req.GET["val"])
    return HttpResponse(str(val))


def square(req):
    val = float(req.GET["val"])
    if abs(val - 10) < 0.0001:
        time.sleep(10)
    return HttpResponse(str(val ** 2))
