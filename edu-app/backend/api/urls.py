from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import WordViewSet, RewardViewSet

router = DefaultRouter()
router.register(r'words', WordViewSet)
router.register(r'rewards', RewardViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
