from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

# Vue simple pour la racine
def home(request):
    return HttpResponse("Backend Django en marche !")

urlpatterns = [
    path('', home),                 # ← route racine
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),   # ← API
]
