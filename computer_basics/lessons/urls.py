from rest_framework import routers
from .api import LessonViewSet

router = routers.DefaultRouter()
router.register('api/lessons', LessonViewSet, 'Lessons')

urlpatterns = router.urls
