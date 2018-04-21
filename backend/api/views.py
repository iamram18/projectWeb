from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import JSONParser
from .models import items
from .serializers import itemsSerializer


@csrf_exempt
def item_list(request):
  if request.method == "GET":
    items1 = items.objects.all()
    serializer = itemsSerializer(items1, many=True)
    return JsonResponse(serializer.data, safe=False)
  elif request.method == "POST":
    data = JSONParser().parse(request)
    serializer = itemsSerializer(data=data)
    if serializer.is_valid():
      serializer.save()
      return JsonResponse(serializer.data, status=201)
    return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def item_detail(request, item_id):
  
  try:
    item = items.objects.get(pk=item_id)
  except Exception as e:
    return JsonResponse({"error": str(e)}, status=404)

  if request.method == "GET":
    serializer = itemsSerializer(item)
    return JsonResponse(serializer.data) 
  elif request.method == "PUT":
    data = JSONParser().parse(request)
    serializer = itemsSerializer(item, data)
    if serializer.is_valid():
      serializer.save()
      return JsonResponse(serializer.data)
  elif request.method == "DELETE":
    item.delete()
    serializer = itemsSerializer(item)
    return JsonResponse(serializer.data)